'use strict';

// write code here
const tableHead = document.querySelector('thead');
const tableBody = document.querySelector('tbody');
const tableTh = [...document.querySelectorAll('thead th')];
const tableNames = [];

for (const value of tableTh) {
  tableNames.push(value.textContent);
}

tableHead.addEventListener('click', e => {
  const index = tableNames.indexOf(e.target.textContent);
  const tableRow = [...tableBody.children];

  tableRow.sort((rowA, rowB) => {
    let valueA = rowA.children[index].textContent;
    let valueB = rowB.children[index].textContent;

    if (valueA[0] === '$') {
      valueA = +valueA.slice(1).replace(/,/g, '');
      valueB = +valueB.slice(1).replace(/,/g, '');
    }

    if (isNaN(Number(valueA))) {
      return valueA.localeCompare(valueB);
    } else {
      return valueA - valueB;
    }
  });

  for (const value of tableRow) {
    tableBody.appendChild(value);
  }
});
