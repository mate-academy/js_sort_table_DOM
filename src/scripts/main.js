'use strict';

const sortTable = (index) => {
  const table = document.querySelector('table');
  const rows = Array.from(table.querySelectorAll('tbody tr'));
  const isNumeric = (cell) => !isNaN(cell) && cell !== '';

  rows.sort((row1, row2) => {
    const cellA = row1.cells[index].textContent.trim();
    const cellB = row2.cells[index].textContent.trim();

    if (isNumeric(cellA) && isNumeric(cellB)) {
      return (
        parseFloat(cellA.replace(/[^0-9.-]+/g, '')) -
        parseFloat(cellB.replace(/[^0-9.-]+/g, ''))
      );
    }

    return cellA.localeCompare(cellB);
  });

  const tbody = table.querySelector('tbody');

  tbody.innerHTML = '';
  rows.forEach((row) => tbody.appendChild(row));
};

document.querySelectorAll('th').forEach((th, index) => {
  th.addEventListener('click', () => sortTable(index));
});
