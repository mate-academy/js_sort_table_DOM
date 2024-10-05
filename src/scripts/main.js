'use strict';

const tbody = document.querySelector('tbody');

document.querySelectorAll('th').forEach((header, index) => {
  header.addEventListener('click', () => {
    const rows = [...tbody.rows];

    rows.sort((rowA, rowB) => {
      const cellA = rowA.cells[index].innerText;
      const cellB = rowB.cells[index].innerText;

      return isNaN(cellA) || isNaN(cellB)
        ? cellA.localeCompare(cellB)
        : cellA - cellB;
    });

    rows.forEach((row) => tbody.appendChild(row));
  });
});
