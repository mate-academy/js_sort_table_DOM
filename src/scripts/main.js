'use strict';

const tableHeaders = document.querySelectorAll('thead th');

tableHeaders.forEach((header) => {
  header.addEventListener('click', () => {
    sortTable(header);
  });
});

const sortTable = (header) => {
  const table = header.closest('table');
  const tbody = table.querySelector('tbody');
  const rows = Array.from(tbody.rows);
  const columnIndex = Array.from(header.parentElement.children).indexOf(header);

  rows.sort((rowA, rowB) => {
    const cellA = rowA.cells[columnIndex].textContent.trim();
    const cellB = rowB.cells[columnIndex].textContent.trim();

    const valueA =
      columnIndex === 3 ? parseFloat(cellA.replace(/[$,]/g, '')) : cellA;

    const valueB =
      columnIndex === 3 ? parseFloat(cellB.replace(/[$,]/g, '')) : cellB;

    if (valueA < valueB) {
      return -1;
    }

    if (valueA > valueB) {
      return 1;
    }

    return 0;
  });

  rows.forEach((row) => tbody.appendChild(row));
};
