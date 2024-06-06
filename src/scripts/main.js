'use strict';

const table = document.querySelector('table');
const tableHead = table.querySelector('thead');
const tableBody = table.querySelector('tbody');

const tableBodyRows = [...tableBody.querySelectorAll('tr')];

tableHead.addEventListener('click', (e) => {
  const title = e.target.closest('th').textContent.toLowerCase();
  const cellIndex = e.target.cellIndex;
  const columnCols = [];

  tableBody.querySelectorAll('tr').forEach((row) => {
    const col = row.cells[cellIndex];

    if (col) {
      columnCols.push(col.textContent);
    }
  });

  const sortFunction = tableBodyRows.sort((a, b) => {
    const colA = a.cells[cellIndex].textContent;
    const colB = b.cells[cellIndex].textContent;

    switch (title) {
      case 'name':
      case 'position':
        return String(colA).localeCompare(String(colB));
      case 'age':
        return +colA - +colB;
      case 'salary':
        return (
          +colA.replaceAll('$', '').replaceAll(',', '') -
          +colB.replaceAll('$', '').replaceAll(',', '')
        );
      default:
        return null;
    }
  });

  tableBody.innerHTML = '';

  sortFunction.forEach((row) => {
    tableBody.appendChild(row);
  });
});
