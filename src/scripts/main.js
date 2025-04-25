'use strict';

const table = document.querySelector('table');

table.addEventListener('click', (e) => {
  const thead = table.querySelector('thead');
  const headerList = thead.querySelectorAll('th');
  const target = e.target;

  if (target.tagName === 'TH') {
    const columnIndex = Array.from(headerList).indexOf(target);
    const tbody = table.querySelector('tbody');

    const rowsArray = Array.from(tbody.rows);

    rowsArray.sort((rowA, rowB) => {
      const cellA = rowA.cells[columnIndex].textContent.trim().toLowerCase();
      const cellB = rowB.cells[columnIndex].textContent.trim().toLowerCase();

      const numA = parseFloat(cellA.replace(/[^0-9.-]+/g, ''));
      const numB = parseFloat(cellB.replace(/[^0-9.-]+/g, ''));

      if (!isNaN(numA) && !isNaN(numB)) {
        return numA - numB;
      }

      return cellA.localeCompare(cellB);
    });

    rowsArray.forEach((row) => tbody.appendChild(row));
  }
});
