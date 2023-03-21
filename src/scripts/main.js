'use strict';

const thead = document.querySelector('thead');
const tbody = document.querySelector('tbody');
const tbodyRows = [...tbody.rows];

thead.addEventListener('click', function(e) {
  const targetIndex = e.target.cellIndex;
  const sort = tbodyRows.sort((a, b) => {
    let cellA = a.cells[targetIndex].innerHTML;
    let cellB = b.cells[targetIndex].innerHTML;

    if (cellA[0] === '$' || cellB[0] === '$') {
      cellA = +cellA.slice(1).replace(',', '');
      cellB = +cellB.slice(1).replace(',', '');

      return cellA - cellB;
    }

    if (isFinite(cellA) || isFinite(cellB)) {
      return cellA - cellB;
    }

    return cellA.localeCompare(cellB);
  });

  tbody.append(...sort);
});
