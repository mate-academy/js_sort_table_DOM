'use strict';

const table = document.querySelector('table');
const tableBody = table.tBodies[0];
const rows = [...tableBody.rows];
const tableHead = table.tHead;

function normalizeSalary(row, cellIndex) {
  return parseFloat(
    row.cells[cellIndex].textContent.replace('$', '')
  );
}

function sortRows(selectedElement) {
  const cellIndex = selectedElement.cellIndex;

  if (selectedElement.textContent === 'Salary') {
    rows.sort((currentRow, nextRow) => {
      return normalizeSalary(currentRow, cellIndex)
        - normalizeSalary(nextRow, cellIndex);
    });

    return;
  }

  rows.sort((currentRow, nextRow) => {
    return currentRow.cells[cellIndex].textContent.localeCompare(
      nextRow.cells[cellIndex].textContent);
  });
}

tableHead.addEventListener('click', (clickEvent) => {
  sortRows(clickEvent.target);

  rows.forEach(row => tableBody.appendChild(row));

  table.appendChild(tableBody);
});
