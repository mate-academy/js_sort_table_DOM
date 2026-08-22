'use strict';

const table = document.querySelector('table');

if (table) {
  const thead = table.querySelector('thead');
  const tbody = table.querySelector('tbody');

  thead.addEventListener('click', (e) => {
    const headerCell = e.target.closest('th');

    if (!headerCell) {
      return;
    }

    const columnIndex = headerCell.cellIndex;
    const rowsArray = Array.from(tbody.querySelectorAll('tr'));

    rowsArray.sort((rowA, rowB) => {
      const cellA = rowA.cells[columnIndex].textContent.trim();
      const cellB = rowB.cells[columnIndex].textContent.trim();

      const cleanNumberA = parseFloat(cellA.replace(/[$,]/g, ''));
      const cleanNumberB = parseFloat(cellB.replace(/[$,]/g, ''));

      if (!isNaN(cleanNumberA) && !isNaN(cleanNumberB)) {
        return cleanNumberA - cleanNumberB;
      }

      return cellA.localeCompare(cellB);
    });

    tbody.append(...rowsArray);
  });
}
