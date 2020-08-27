'use strict';

const tbody = document.querySelector('tbody');
const thead = document.querySelector('thead');

thead.addEventListener('click', (event) => {
  sortTableByColumn(event.target.cellIndex,);
});

function sortTableByColumn(columnIndex) {
  const rows = [...tbody.rows];

  rows.sort((a, b) => {
    let rowA = a.cells[columnIndex].textContent;
    let rowB = b.cells[columnIndex].textContent;

    if (columnIndex === 3) {
      rowA = +rowA.replace(/[$,]/g, '');
      rowB = +rowB.replace(/[$,]/g, '');
    }

    return columnIndex === 2 || columnIndex === 3
      ? (+rowA) - (+rowB)
      : rowA.localeCompare(rowB);
  });

  tbody.append(...rows);
}
