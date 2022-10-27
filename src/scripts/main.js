'use strict';

const thead = document.querySelector('thead');
const tbody = document.querySelector('tbody');

function sortTable(i) {
  const sortedRows = [ ...tbody.rows ]
    .sort((rowA, rowB) => {
      const valueA = rowA.cells[i].innerHTML.replaceAll(/\W/g, '');
      const valueB = rowB.cells[i].innerHTML.replaceAll(/\W/g, '');

      return isNaN(valueA)
        ? valueA.localeCompare(valueB)
        : valueA - valueB;
    });

  tbody.append(...sortedRows);
}

thead.addEventListener('click', e => {
  const index = e.target.cellIndex;

  sortTable(index);
});
