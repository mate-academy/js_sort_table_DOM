'use strict';

const table = document.querySelector('table');
const tableHead = table.querySelector('thead');
const tableBody = table.querySelector('tbody');

tableHead.addEventListener('click', (e) => {
  const index = e.target.cellIndex;
  const rows = Array.from(tableBody.querySelectorAll('tr'));

  const sortedRows = rows.sort((rowA, rowB) => {
    switch (index) {
      case 0:
      case 1:
        return rowA.cells[index].innerText.localeCompare(
          rowB.cells[index].innerText,
        );
      case 2:
        return +rowA.cells[index].innerText - +rowB.cells[index].innerText;
      case 3:
        return (
          parseFloat(rowA.cells[index].innerText.slice(1)) -
          parseFloat(rowB.cells[3].innerText.slice(1))
        );
      default:
    }
  });

  tableBody.append(...sortedRows);
});
