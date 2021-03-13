'use strict';

const people = document.querySelectorAll('tbody tr');
const tableBody = document.querySelector('tbody');
const tableHead = tableBody.parentElement.firstElementChild;

tableHead.addEventListener('click', (clickEvent) => {
  if (clickEvent.target.tagName !== 'TH') {
    return;
  }

  const header = clickEvent.target.closest('th').innerText;
  const headerNumber = clickEvent.target.closest('th').cellIndex;
  let sortedList;

  if (header === 'Name' || header === 'Position') {
    sortedList = [...people].sort((current, next) => {
      const first = current.children[headerNumber].innerText;
      const second = next.children[headerNumber].innerText;

      return first.localeCompare(second);
    });
  }

  if (header === 'Age' || header === 'Salary') {
    sortedList = [...people].sort((current, next) => {
      const first = getPureNumber(current, header);

      const second = getPureNumber(next, header);

      return first - second;
    });
  }

  tableBody.innerHTML = '';
  tableBody.append(...sortedList);

  function getPureNumber(arg, string) {
    if (string === 'Age') {
      return +arg.children[headerNumber].innerText;
    } else {
      return +arg.children[headerNumber]
        .innerText.replace(/[$,]/g, '');
    }
  }
});
