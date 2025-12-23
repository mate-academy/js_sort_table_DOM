'use strict';

const table = document.querySelector('table');
const thead = table.querySelector('thead');
const tbody = table.querySelector('tbody');

thead.addEventListener('click', (e) => {
  if (e.target.tagName !== 'TH') {
    return;
  }

  const columnIndex = e.target.cellIndex;

  const rows = Array.from(tbody.querySelectorAll('tr'));

  rows.sort((rowA, rowB) => {
    const cellA = rowA.cells[columnIndex].textContent.trim();
    const cellB = rowB.cells[columnIndex].textContent.trim();

    if (columnIndex === 2 || columnIndex === 3) {
      const valueA = Number(cellA.replace(/[$,]/g, ''));
      const valueB = Number(cellB.replace(/[$,]/g, ''));

      return valueA - valueB;
    }

    return cellA.localeCompare(cellB);
  });

  tbody.innerHTML = '';

  rows.forEach((row) => {
    tbody.appendChild(row);
  });
});
