'use strict';

const table = document.querySelector('table');
const tableHead = table.querySelector('thead');
const tableBody = table.querySelector('tbody');

tableHead.addEventListener('click', ev => {
  const index = ev.target.cellIndex;
  const bodyRows = Array.from(tableBody.querySelectorAll('tr'));

  bodyRows.sort((a, b) => {
    let aValue = a.querySelectorAll('td')[index].innerText;
    let bValue = b.querySelectorAll('td')[index].innerText;

    if (aValue.includes('$')) {
      aValue = aValue.slice(1).replace(',', '');
      bValue = bValue.slice(1).replace(',', '');

      return aValue - bValue;
    }

    return aValue.localeCompare(bValue);
  });

  tableBody.innerHTML = '';

  bodyRows.forEach(row => {
    tableBody.append(row);
  });
});
