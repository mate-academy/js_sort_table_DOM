'use strict';

const tableHead = document.querySelector('thead');
const tableBody = document.querySelector('tbody');

tableHead.addEventListener('click', (e) => {
  const headClick = e.target.closest('th');
  const cellIndex = headClick.cellIndex;
  const rows = [...tableBody.children];

  if (!headClick || !tableHead.contains(headClick)) {
    return;
  }

  sortedTable(cellIndex, rows);
});

function sortedTable(index, table) {
  const sortedList = table;

  sortedList.sort((a, b) => {
    const cellA = a.cells[index].textContent;
    const cellB = b.cells[index].textContent;

    if (cellA.includes('$')) {
      return Number(cellA.replace(/[$,]/g, ''))
       - Number(cellB.replace(/[$,]/g, ''));
    }

    if (!isNaN(Number(cellA))) {
      return Number(cellA) - Number(cellB);
    } else {
      return cellA.localeCompare(cellB);
    }
  });

  for (const row of sortedList) {
    tableBody.appendChild(row);
  }
}
