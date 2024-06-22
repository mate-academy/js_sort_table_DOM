'use strict';

const tableHeader = document.querySelector('tr');
const tableBody = document.querySelector('tbody');
const toNumber = (string) => {
  if (typeof string === 'string') {
    const clearNum = string.replace(/[$, ]/g, '');

    return parseInt(clearNum);
  }
};

tableHeader.addEventListener('click', (e) => {
  const headerChildren = [...tableHeader.children];
  const columnName = e.target.closest('th');
  const sortedColumn = headerChildren.indexOf(columnName);
  const columnsToSort = [...tableBody.children];

  const columnsSorted = columnsToSort.sort((a, b) => {
    const elemA = a.children[sortedColumn].innerHTML;
    const elemb = b.children[sortedColumn].innerHTML;

    const aToNum = toNumber(elemA);
    const bToNum = toNumber(elemb);

    if (isNaN(aToNum)) {
      return elemA.localeCompare(elemb);
    }

    return aToNum - bToNum;
  });

  tableBody.innerHTML = '';

  columnsSorted.forEach((el) => {
    tableBody.appendChild(el);
  });
});
