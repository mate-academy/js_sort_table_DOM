'use strict';

const table = document.querySelector('table');

const tHead = table.tHead.rows[0];
const tBody = table.tBodies[0];
const tBodyRows = table.tBodies[0].rows;

function parseSalary(numberStr) {
  const cleanStr = numberStr.replace(/[^0-9]/g, '');

  return +cleanStr;
}

function sortTableColumn(column, sortField) {
  const sortedColumn = [...column];

  switch (sortField) {
    case 'name':
    case 'position':
      sortedColumn.sort((td1, td2) => {
        return td1.innerText.localeCompare(td2.innerText);
      });
      break;

    case 'age':
      sortedColumn.sort((td1, td2) => {
        return +td1.innerText - +td2.innerText;
      });
      break;

    case 'salary': {
      sortedColumn.sort((td1, td2) => {
        return parseSalary(td1.innerText) - parseSalary(td2.innerText);
      });
    }
  }

  return sortedColumn;
}

tHead.addEventListener('click', (e) => {
  if (e.target.tagName === 'TH') {
    const sortField = e.target.innerText.toLowerCase();
    const index = e.target.cellIndex;
    const column = [];

    for (const row of tBodyRows) {
      column.push(row.cells[index]);
    }

    const sortedColumn = sortTableColumn(column, sortField);
    const sortedRows = sortedColumn.map((td) => td.closest('tr'));

    sortedRows.forEach((tr) => tBody.append(tr));
  }
});
