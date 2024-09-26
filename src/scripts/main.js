'use strict';

const table = document.querySelector('table');
const tableHead = table.querySelector('thead');
const tableBody = table.querySelector('tbody');

tableHead.addEventListener('click', e => {
  const index = e.target.cellIndex;
  const rows = Array.from(tableBody.querySelectorAll('tr'));
  const sortedRows = rows.sort((rowA, rowB) => {
    const cellA = rowA.querySelectorAll('td')[index].textContent;
    const cellB = rowB.querySelectorAll('td')[index].textContent;

    if (index === 3) {
      const numA = parseFloat(cellA.replace(/[^0-9.-]+/g, ''));
      const numB = parseFloat(cellB.replace(/[^0-9.-]+/g, ''));
      return numA - numB;
    } else {
        return cellA.localeCompare(cellB);
      }
  });
  tableBody.append(...sortedRows);
});
