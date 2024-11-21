'use strict';

const table = document.querySelector('table');
const headers = table.querySelectorAll('th');
const tbody = table.querySelector('tbody');

headers.forEach((header, index) => {
  header.addEventListener('click', () => {
    sortTableByColumn(index);
  });
});

function sortTableByColumn(columnIndex) {
  const rowsArray = Array.from(tbody.querySelectorAll('tr'));
  const sortedRows = rowsArray.sort((rowA, rowB) => {
    const cellA = rowA.cells[columnIndex].innerText;
    const cellB = rowB.cells[columnIndex].innerText;

    if (headers[columnIndex].innerText === 'Age') {
      return parseInt(cellA) - parseInt(cellB);
    }

    if (headers[columnIndex].innerText === 'Salary') {
      return (
        parseFloat(cellA.replace(/[$,]/g, '')) -
        parseFloat(cellB.replace(/[$,]/g, ''))
      );
    }

    return cellA.localeCompare(cellB);
  });

  sortedRows.forEach((row) => tbody.appendChild(row));
}
