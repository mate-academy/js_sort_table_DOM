'use strict';

const table = document.querySelector('table');
const tableHeaders = table.querySelector('thead');

tableHeaders.addEventListener('click', (e) => {
  sortColumn(e.target.cellIndex);
});

function sortColumn(columnIndex) {
  const rows = [];

  for (let i = 1; i < table.rows.length - 1; i++) {
    rows.push(table.rows[i]);
  }

  rows.sort((a, b) => {
    if (columnIndex === 3) {
      return parseSalary(a.children[columnIndex].innerText)
        - parseSalary(b.children[columnIndex].innerText);
    }

    return a.children[columnIndex].innerText
      .localeCompare(b.children[columnIndex].innerText);
  });

  for (const row of rows) {
    table.append(row);
  }
}

function parseSalary(salaryString) {
  return +salaryString.replaceAll('$', '').replaceAll(',', '');
}
