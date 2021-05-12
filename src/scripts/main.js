'use strict';

const thead = document.querySelector('thead');
const tbody = document.querySelector('tbody');

thead.addEventListener('click', e => {
  const onClick = e.target.closest('th');

  sortRows(onClick.cellIndex);
});

function sortRows(colNum) {
  const rowsArray = [...tbody.rows].slice(0);
  let choice;

  switch (colNum) {
    case 3:
      choice = (rowA, rowB) =>
        parseInt(rowA.cells[colNum].innerHTML.slice(1))
          - parseInt(rowB.cells[colNum].innerHTML.slice(1));
      break;
    default:
      choice = (rowA, rowB) =>
        rowA.cells[colNum].innerHTML
          > rowB.cells[colNum].innerHTML
          ? 1
          : -1;
      break;
  }

  rowsArray.sort(choice);

  tbody.append(...rowsArray);
}
