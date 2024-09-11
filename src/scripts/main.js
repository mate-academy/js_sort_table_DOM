'use strict';

const table = document.querySelector('table');

const headers = table.querySelectorAll('th');

// const rows = document.querySelectorAll('tbody tr');

headers.forEach((header, index) => {
  header.addEventListener('click', () => sortTable(index));
});

function sortTable(columnIndex) {
  const tbody = table.tBodies[0];
  const rows = Array.from(tbody.rows);

  const sortedRows = rows.sort((a, b) => {
    let cellA = a.cells[columnIndex].innerText.toLowerCase();
    let cellB = b.cells[columnIndex].innerText.toLowerCase();

    if (cellA.includes('$')) {
      cellA = parseFloat(cellA.replace(/[\\$,]/g, ''));
      cellB = parseFloat(cellB.replace(/[\\$,]/g, ''));

      return parseFloat(cellA) - parseFloat(cellB);
    }

    return cellA.localeCompare(cellB);
  });

  sortedRows.forEach((row) => tbody.appendChild(row));
}
