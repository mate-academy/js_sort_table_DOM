'use strict';

const table = document.querySelector('table');
const tBodyRows = document.querySelectorAll('tbody > tr');

table.addEventListener('click', function(e) {
  const header = e.target.closest('th');

  if (!header) {
    return;
  }

  const cellIndex = header.cellIndex;

  const sortedColumn = sortColumnData(tBodyRows, cellIndex);

  sortedColumn.map((data, rowIndex) => {
    const td = document.createElement('td');

    td.innerText = data;

    tBodyRows[rowIndex].cells[cellIndex].replaceWith(td);
  });
});

function sortColumnData(rows, index) {
  const result = [];
  const bySalary = index === 3;

  for (const row of rows) {
    result.push(row.cells[index].innerText);
  }

  result.sort((a, b) => {
    if (bySalary) {
      const numA = a.slice(1).replace(',', '');
      const numB = b.slice(1).replace(',', '');

      return numA - numB;
    }

    return a.localeCompare(b);
  });

  return result;
}
