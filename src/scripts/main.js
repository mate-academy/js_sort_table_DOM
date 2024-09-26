'use strict';

// write code here
const headerTitle = document.querySelectorAll('th');
const sortedRows = document.querySelectorAll('tbody tr');

headerTitle.forEach((head) => {
  head.addEventListener('click', (e) => {
    const indexRow = e.target.cellIndex;

    sortedSort(sortedRowsToArr, indexRow);
  });
});

const sortedRowsToArr = Array.from(sortedRows);

function sortedSort(titles, indexRow) {
  titles.sort((a, b) => {
    const cellTextA = a.querySelectorAll('td')[indexRow].textContent;
    const cellTextB = b.querySelectorAll('td')[indexRow].textContent;

    if (indexRow === 0 || indexRow === 1) {
      return cellTextA.localeCompare(cellTextB);
    } else {
      const numA = parseFloat(cellTextA.replace(/[^0-9.-]+/g, ''));
      const numB = parseFloat(cellTextB.replace(/[^0-9]+/g, ''));

      return numA - numB;
    }
  });

  const bodyT = document.querySelector('tbody');

  bodyT.innerHTML = '';

  titles.forEach((row) => {
    bodyT.appendChild(row);
  });
}
