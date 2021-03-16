'use strict';

const table = document.querySelector('table');
const people = table.tBodies[0].querySelectorAll('tr');
const tableBody = table.tBodies[0];
const tableHead = tableBody.parentElement.firstElementChild;

tableHead.addEventListener('click', (clickEvent) => {
  if (clickEvent.target.tagName !== 'TH') {
    return;
  }

  const header = clickEvent.target.closest('th').innerText;
  const headerNumber = clickEvent.target.closest('th').cellIndex;
  let sortedList;

  switch (header) {
    case 'Name':
    case 'Position':
      sortedList = [...people].sort((current, next) => {
        const first = current.children[headerNumber].innerText;
        const second = next.children[headerNumber].innerText;

        return first.localeCompare(second);
      });
      break;

    case 'Age':
    case 'Salary':
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
