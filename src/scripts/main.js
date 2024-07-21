'use strict';

const table = document.querySelector('table');
const headers = table.tHead.rows[0].cells;

function handleHeaderClick(e) {
  const tableBody = table.tBodies[0];
  const rows = [...tableBody.rows];
  const newTableBody = document.createElement('tbody');
  let sortedRows = [];

  switch (e.target.textContent) {
    case 'Name':
      sortedRows = rows.sort((row1, row2) => {
        return row1.cells[0].textContent.localeCompare(
          row2.cells[0].textContent,
        );
      });
      break;

    case 'Position':
      sortedRows = rows.sort((row1, row2) => {
        return row1.cells[1].textContent.localeCompare(
          row2.cells[1].textContent,
        );
      });
      break;

    case 'Age':
      sortedRows = rows.sort((row1, row2) => {
        return +row1.cells[2].textContent - +row2.cells[2].textContent;
      });
      break;

    case 'Salary':
      sortedRows = rows.sort((row1, row2) => {
        return (
          +row1.cells[3].textContent.replace(/\D/g, '') -
          +row2.cells[3].textContent.replace(/\D/g, '')
        );
      });
      break;
  }

  sortedRows.forEach((row) => newTableBody.appendChild(row));
  table.replaceChild(newTableBody, tableBody);
}

[...headers].forEach((header) => {
  header.addEventListener('click', handleHeaderClick);
});
