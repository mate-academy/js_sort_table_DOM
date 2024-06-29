'use strict';

const tableHeader = document.querySelector('thead');
const tableHeaderCells = tableHeader.querySelector('tr');
const tableBody = document.querySelector('tbody');
const toNumber = (string) => {
  if (typeof string === 'string' && string.length !== 0) {
    const clearNum = string.replace(/[$, ]/g, '');

    return parseInt(clearNum, 10);
  }
};

tableHeaderCells.addEventListener('click', (e) => {
  const headerChildren = [...tableHeaderCells.children];
  const columnName = e.target.closest('th');

  if (columnName !== null) {
    const sortedColumn = headerChildren.indexOf(columnName);
    const columnsToSort = [...tableBody.children];

    const columnsSorted = columnsToSort.sort((a, b) => {
      const elemA = a.children[sortedColumn].innerHTML;
      const elemB = b.children[sortedColumn].innerHTML;

      const aToNum = toNumber(elemA);
      const bToNum = toNumber(elemB);

      if (Number.isNaN(aToNum)) {
        return elemA.localeCompare(elemB);
      }

      return aToNum - bToNum;
    });

    tableBody.innerHTML = '';

    columnsSorted.forEach((el) => {
      tableBody.appendChild(el);
    });
  }
});
