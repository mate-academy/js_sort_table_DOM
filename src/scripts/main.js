'use strict';

const columnName = document.querySelectorAll('thead th');
const tableBody = document.querySelector('tbody');
const tableRow = [...tableBody.querySelectorAll('tr')];

const filterStr = (str) => str.replace(/[^a-zA-Z0-9]/g, '');

for (let i = 0; i < columnName.length; i++) {
  columnName[i].addEventListener('click', () => {
    tableRow.sort((a, b) => {
      const valueA = a.children[i].textContent;
      const valueB = b.children[i].textContent;

      return isFinite(filterStr(valueA))
        ? filterStr(valueA) - filterStr(valueB)
        : filterStr(valueA).filterStr(valueB);
    });

    tableBody.append(...tableRow);
  });
}
