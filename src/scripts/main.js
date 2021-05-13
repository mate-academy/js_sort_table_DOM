'use strict';

const thead = document.querySelector('thead');
const tbody = document.querySelector('tbody');

thead.addEventListener('click', e => {
  const onClick = e.target.closest('th');

  sortRows(onClick.cellIndex);
});

function sortRows(colNum) {
  const colName = thead.rows[0].cells[colNum].innerHTML;
  const rowsArray = [...tbody.rows].slice(0);
  let choice;

  switch (colName) {
    case 'Salary':
      const parseSalary = cell =>
        +cell
          .slice(1)
          .split(',')
          .join('');

      choice = (rowA, rowB) =>
        parseSalary(rowA.cells[colNum].innerHTML)
          - parseSalary(rowB.cells[colNum].innerHTML);
      break;
    default:
      choice = (rowA, rowB) =>
        isNaN(rowA.cells[colNum].innerHTML)
          ? (rowA.cells[colNum].innerHTML)
            .localeCompare(rowB.cells[colNum].innerHTML)
          : +rowA.cells[colNum].innerHTML
            - +rowB.cells[colNum].innerHTML;
      break;
  }

  rowsArray.sort(choice);

  tbody.append(...rowsArray);
}
