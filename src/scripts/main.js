'use strict';

const table = document.querySelector('table');
const tableBody = table.querySelector('tbody');
const tableBodyRows = Array.from(tableBody.querySelectorAll('tr'));

table.addEventListener('click', (e) => {
  const header = e.target.closest('th');

  if (!header) {
    return;
  }

  const headers = Array.from(table.querySelectorAll('th'));
  const currentHeaderIndex = headers.indexOf(header);
  const currentHeaderName = header.textContent.toLowerCase();

  function sortRows(rowA, rowB) {
    const cellA = rowA.cells[currentHeaderIndex].textContent;
    const cellB = rowB.cells[currentHeaderIndex].textContent;

    switch (currentHeaderName) {
      case 'name':
      case 'position':
        return cellA.localeCompare(cellB);

      case 'age':
        return +cellA - +cellB;

      case 'salary':
        return (
          +cellA.replaceAll('$', '').replaceAll(',', '') -
          +cellB.replaceAll('$', '').replaceAll(',', '')
        );
    }
  }

  tableBodyRows.sort(sortRows).forEach((row) => {
    tableBody.appendChild(row);
  });
});
