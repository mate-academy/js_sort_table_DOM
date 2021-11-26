'use strict';

// write code here

const headers = document.querySelector('thead');

headers.addEventListener('click', (e) => {
  const employeesTable = document.querySelector('tbody');
  const employeesArray = [...employeesTable.rows];
  const clickPoint = e.target.innerText;
  const column = e.target.cellIndex;

  function sortList(list, callback) {
    if (clickPoint === 'Age' || clickPoint === 'Salary') {
      list.sort((a, b) =>
        callback(a.cells[column].innerText)
        - callback(b.cells[column].innerText)
      );
    } else {
      list.sort((a, b) =>
        a.cells[column].innerText.localeCompare(
          b.cells[column].innerText
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
