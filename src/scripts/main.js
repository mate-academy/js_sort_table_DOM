'use strict';

const tableHead = document.querySelector('thead');
const tableBody = document.querySelector('tbody');
const tableRows = [...tableBody.querySelectorAll('tr')];

tableHead.addEventListener('click', (event) => {
  const headCell = event.target.closest('th');
  const tableColumn = headCell.cellIndex;

  tableRows.sort((a, b) => {
    const firstRow = a.cells[tableColumn].innerText;
    const secondRow = b.cells[tableColumn].innerText;

    if (event.target.innerText === 'Salary') {
      return (
        (+firstRow.replace(',', '').slice(1))
        - (+secondRow.replace(',', '').slice(1))
      );
    }

    if (event.target.innerText === 'Age') {
      return (+firstRow) - (+secondRow);
    }

    return firstRow.localeCompare(secondRow);
  });

  for (const row of tableRows) {
    tableBody.appendChild(row);
  }
});
