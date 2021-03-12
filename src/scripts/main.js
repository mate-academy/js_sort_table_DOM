'use strict';

const people = document.querySelectorAll('table tbody tr');
const tableBody = document.querySelector('table tbody');

document.addEventListener('click', (clickEvent) => {
  if (clickEvent.target.tagName !== 'TH') {
    return;
  }

  const header = clickEvent.target.closest('th').innerText;
  const headerNumber = clickEvent.target.closest('th').cellIndex;
  let sorted;

  if (header === 'Name' || header === 'Position') {
    sorted = [...people].sort((current, next) => {
      const first = current.children[headerNumber].innerText;
      const second = next.children[headerNumber].innerText;

      return first.localeCompare(second);
    });
  }

  if (header === 'Age' || header === 'Salary') {
    sorted = [...people].sort((current, next) => {
      const first = +current
        .children[headerNumber]
        .innerText
        .replace(/[$,]/g, '');

      const second = +next
        .children[headerNumber]
        .innerText
        .replace(/[$,]/g, '');

      return first - second;
    });
  }

  tableBody.innerHTML = '';
  sorted.forEach(row => tableBody.append(row));
});
