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

  sortedList.sort((previous, current) => {
    const previousCell = previous.cells[index].textContent;
    const currentCell = current.cells[index].textContent;

    if (eventClick === 'Salary') {
      return Number(previousCell.replace(/[$,]/g, ''))
       - Number(currentCell.replace(/[$,]/g, ''));
    } else if (eventClick === 'Age') {
      return Number(previousCell)
      - Number(currentCell);
    } else {
      return previousCell.localeCompare(currentCell);
    }
  });

  for (const row of sortedList) {
    tableBody.appendChild(row);
  }
}
