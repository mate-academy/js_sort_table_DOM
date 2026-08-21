'use strict';

const table = document.querySelector('table');
const titles = table.querySelectorAll('th');

titles.forEach((title) => {
  title.addEventListener('click', () => {
    const columnIndex = title.cellIndex;

    sortRows(columnIndex);
  });
});

function sortRows(index) {
  const rows = Array.from(table.tBodies[0].rows);

  rows.sort((rowA, rowB) => {
    let cellA = rowA.cells[index].textContent.trim();
    let cellB = rowB.cells[index].textContent.trim();

    if (index === 3) {
      cellA = parseFloat(cellA.replace(/[$,]/g, ''));
      cellB = parseFloat(cellB.replace(/[$,]/g, ''));

      return cellA - cellB;
    }

    if (!isNaN(cellA) && !isNaN(cellB)) {
      return parseFloat(cellA) - parseFloat(cellB);
    } else {
      return cellA.localeCompare(cellB);
    }
  });

  rows.forEach((row) => table.tBodies[0].appendChild(row));
}
