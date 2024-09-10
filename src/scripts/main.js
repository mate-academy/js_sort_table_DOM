'use strict';

// write code here
const table = document.querySelector('table');
const tbody = document.querySelector('tbody');

function sortTable(tableElement, index) {
  function convertToNumber(string) {
    return Number(string.replace(/[$,]/g, ''));
  }

  function sorter(arr) {
    return arr.sort((a, b) => {
      const colunmOne = [...a.children][index].innerText;
      const colunmTwo = [...b.children][index].innerText;

      if (!isNaN(convertToNumber(colunmOne))) {
        return convertToNumber(colunmOne) - convertToNumber(colunmTwo);
      } else {
        return colunmOne.localeCompare(colunmTwo);
      }
    });
  }

  const newRows = [...tableElement.children];

  tableElement.innerHTML = '';
  sorter(newRows).forEach((row) => tableElement.appendChild(row));
}

table.addEventListener(
  'click',
  (e) => {
    if (e.target.tagName === 'TH') {
      const cloneCollection = [...e.target.parentNode.children];
      const index = cloneCollection.indexOf(e.target, 0);

      sortTable(tbody, index);
    }
  },
  true,
);
