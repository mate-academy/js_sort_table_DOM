'use strict';

// write code here

const headers = document.querySelector('thead');

headers.addEventListener('click', (e) => {
  const employeesTable = document.querySelector('tbody');
  const employeesArray = [...employeesTable.rows];
  const clickPoint = e.target.cellIndex;

  function sortList(list, callback) {
    if (clickPoint > 1) {
      list.sort((a, b) =>
        callback(a.cells[clickPoint].innerText)
        - callback(b.cells[clickPoint].innerText)
      );
    } else {
      list.sort((a, b) =>
        a.cells[clickPoint].innerText.localeCompare(
          b.cells[clickPoint].innerText
        )
      );
    }

    return employeesTable.append(...list);
  };

  function stringToNumber(str) {
    return +str.replace(/[^0-9]/g, '');
  }

  sortList(employeesArray, stringToNumber);
});
