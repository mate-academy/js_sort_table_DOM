'use strict';

// write code here

const sortButtons = document.querySelectorAll('th');

function sortTable(cellIndex) {
  const tableBody = document.querySelector('tbody');
  const rows = Array.from(tableBody.rows);

  rows.sort((rowA, rowB) => {
    let cellA = rowA.cells[cellIndex].textContent.trim();
    let cellB = rowB.cells[cellIndex].textContent.trim();

    if (cellIndex === 2 || cellIndex === 3) {
      cellA = parseFloat(cellA.replace(/[$,]/g, '')) || 0;
      cellB = parseFloat(cellB.replace(/[$,]/g, '')) || 0;

      return cellB - cellA;
    }

    return cellA.localeCompare(cellB);
  });

  rows.forEach((row) => tableBody.appendChild(row));
}

sortButtons.forEach((button) => {
  button.addEventListener('click', () => {
    sortTable(button.cellIndex);
  });
});
