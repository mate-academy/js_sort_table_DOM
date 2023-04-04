'use strict';

const tableHead = document.querySelector('thead');
const tableBody = document.querySelector('tbody');
const tableRows = tableBody.rows;

function getSalaryValue(str) {
  return +str.replace('$', '').replace(',', '');
};

tableHead.addEventListener('click', e => {
  const index = e.target.cellIndex;

  const sortedTable = [...tableRows].sort((a, b) => {
    const cellA = a.cells[index].innerHTML;
    const cellB = b.cells[index].innerHTML;

    if (cellA.includes('$')) {
      return (getSalaryValue(cellA) - getSalaryValue(cellB));
    }

    if (isFinite(cellA)) {
      return cellA - cellB;
    }

    return cellA.localeCompare(cellB);
  });

  tableBody.append(...sortedTable);
});
