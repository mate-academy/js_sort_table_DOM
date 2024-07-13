'use strict';

const tBodyRows = document.querySelectorAll('tbody tr');
const tableBody = document.querySelector('tbody');
const tableHeaders = [...document.querySelectorAll('thead th')].map(
  (th) => th.textContent,
);

document.querySelectorAll('thead th').forEach((header) => {
  header.addEventListener('click', (e) => {
    const mappedRows = mapData(tBodyRows, tableHeaders);
    const sortedRows = sortData(mappedRows, e.target.textContent);

    tableBody.innerHTML = '';

    insertSortedRows(sortedRows);
  });
});

function mapData(rows, headers) {
  return [...rows].map((row) => {
    const rowData = {};

    [...row.cells].forEach((cell, index) => {
      const header = headers[index];

      rowData[header] = cell.textContent;
    });

    return rowData;
  });
}

function sortData(data, header) {
  const isSalaryColumn = header === 'Salary';

  return data.sort((rowA, rowB) => {
    if (isSalaryColumn) {
      const valueA = rowA[header].replace('$', '').replace(',', '');
      const valueB = rowB[header].replace('$', '').replace(',', '');

      return valueA - valueB;
    }

    return rowA[header].localeCompare(rowB[header]);
  });
}

function insertSortedRows(data) {
  for (const row of data) {
    const tr = document.createElement('tr');

    for (const key in row) {
      const td = document.createElement('td');

      td.textContent = row[key];

      tr.appendChild(td);
    }

    tableBody.appendChild(tr);
  }
}
