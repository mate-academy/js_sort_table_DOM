'use strict';

const theadElem = document.querySelector('thead');
const tbodyElem = document.querySelector('tbody');

const thList = Array.from(theadElem.querySelectorAll('th'));
const trList = Array.from(tbodyElem.querySelectorAll('tr'));

const sortTable = (rows, column, isNumber = false) => {
  return rows.sort((rowA, rowB) => {
    const cellA = rowA.cells[column].innerText.trim();
    const cellB = rowB.cells[column].innerText.trim();

    if (isNumber) {
      return (
        parseInt(cellA.replace(/[$,]/g, '')) -
        parseInt(cellB.replace(/[$,]/g, ''))
      );
    }

    return cellA.localeCompare(cellB);
  });
};

thList.forEach((trElement) => {
  trElement.addEventListener('click', (ev) => {
    const columnIndex = ev.target.cellIndex;
    let sortedRows;

    if (columnIndex === 2 || columnIndex === 3) {
      sortedRows = sortTable(trList, columnIndex, true);
    } else {
      sortedRows = sortTable(trList, columnIndex);
    }

    tbodyElem.innerHTML = '';

    sortedRows.forEach((row) => {
      tbodyElem.appendChild(row);
    });
  });
});
