'use strict';

const tableHead = document.querySelector('thead');
const tableBody = document.querySelector('tbody');

tableHead.addEventListener('click', (clickEvent) => {
  const headClick = clickEvent.target.closest('th');
  const cellIndex = headClick.cellIndex;
  const rows = [...tableBody.children];
  const eventA = clickEvent.target.textContent;

  if (!headClick || !tableHead.contains(headClick)) {
    return;
  }

  sortedTable(cellIndex, rows, eventA);
});

function sortedTable(index, table, eventClick) {
  const sortedList = table;

  sortedList.sort((a, b) => {
    const currentCell = a.cells[index].textContent;
    const previousCell = b.cells[index].textContent;

    if (eventClick === 'Salary') {
      return Number(currentCell.replace(/[$,]/g, ''))
       - Number(previousCell.replace(/[$,]/g, ''));
    } else if (eventClick === 'Age') {
      return Number(currentCell)
      - Number(previousCell);
    } else {
      return currentCell.localeCompare(previousCell);
    }
  });

  for (const row of sortedList) {
    tableBody.appendChild(row);
  }
}
