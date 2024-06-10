'use strict';

const thead = document.querySelector('thead');
const tbody = document.querySelector('tbody');
const theadCells = [...thead.rows[0].cells];
const tbodyRows = [...tbody.rows];

const sortTable = (columnIndex) => {
  tbodyRows
    .sort((a, b) => {
      a.cells[columnIndex].textContent
        .trim()
        .localeCompare(b.cells[columnIndex].textContent.trim(), 'en', {
          numeric: true,
        });
    })
    .forEach((row) => tbody.appendChild(row));
};

theadCells.forEach((cell, index) => {
  cell.onclick = () => sortTable(index);
});
