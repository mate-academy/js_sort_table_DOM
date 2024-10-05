'use strict';

const tbody = document.querySelector('tbody');

document.querySelectorAll('th').forEach((header, index) => {
  header.addEventListener('click', () => {
    const rows = [...tbody.rows];

    rows.sort((rowA, rowB) => {
      const cellA = rowA.cells[index].innerText;
      const cellB = rowB.cells[index].innerText;

      const valueA = cellA.startsWith('$') ? parseFloat(cellA.slice(1)) : cellA;
      const valueB = cellB.startsWith('$') ? parseFloat(cellB.slice(1)) : cellB;

      return isNaN(valueA) || isNaN(valueB)
        ? valueA.localeCompare(valueB)
        : valueA - valueB;
    });

    rows.forEach((row) => tbody.appendChild(row));
  });
});
