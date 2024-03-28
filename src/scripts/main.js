'use strict';

const getNumber = (value) => {
  return Number(value.slice(1).split(',').join(''));
};

const table = document.querySelector('table');

table.addEventListener('click', function(e) {
  const th = e.target.closest('thead th');
  const thIndex = th.cellIndex;
  const tbody = document.querySelector('tbody');
  const sortedRows = Array.from(tbody.rows);

  if (th.innerHTML === 'Name' || th.innerHTML === 'Position') {
    sortedRows.sort((rowA, rowB) => {
      return rowA.cells[thIndex]
        .innerHTML.localeCompare(rowB.cells[thIndex].innerHTML);
    });
  }

  if (th.innerHTML === 'Age') {
    sortedRows.sort((rowA, rowB) => {
      return rowA.cells[thIndex].innerHTML - rowB.cells[thIndex].innerHTML;
    });
  }

  if (th.innerHTML === 'Salary') {
    sortedRows.sort((rowA, rowB) => {
      return getNumber(rowA.cells[thIndex].innerHTML)
        - getNumber(rowB.cells[thIndex].innerHTML);
    });
  }

  tbody.append(...sortedRows);
});
