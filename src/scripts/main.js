'use strict';

const tbody = document.querySelector('tbody');
const thead = document.querySelector('thead');

function sortTable(index) {
  const sortedRows = [...tbody.rows].sort((rowA, rowB) => {
    const value1 = rowA.cells[index].innerHTML;
    const value2 = rowB.cells[index].innerHTML;

    return isNaN(value1)
      ? value1.localeCompare(value2)
      : value1 - value2;
  });

  tbody.append(...sortedRows);
};

thead.addEventListener('click', (ev) => {
  const index = ev.target.cellIndex;

  sortTable(index);
});
