'use strict';

const table = document.querySelector('table');

table.addEventListener('click', e => {
  if (e.target.tagName !== 'TH') {
    return;
  }

  sortColumn(e.target.cellIndex, e.target.innerText);
});

function sortColumn(columnNumber, columnTitle) {
  const tbody = document.querySelector('tbody');

  const employeeInfo = Array.from(tbody.rows);

  const compare = function(firstPerson, secondPerson) {
    const firstPersonData = firstPerson.cells[columnNumber].innerHTML;
    const secondPersonData = secondPerson.cells[columnNumber].innerHTML;

    switch (columnTitle) {
      case 'Name':
      case 'Position':
        return firstPersonData.localeCompare(secondPersonData);

      case 'Age':
        return firstPersonData - secondPersonData;

      case 'Salary':
        return convertToNumber(firstPersonData)
          - convertToNumber(secondPersonData);
    }
  };

  employeeInfo.sort(compare);

  tbody.append(...employeeInfo);
}

function convertToNumber(salaryString) {
  return salaryString.slice(1).split(',').join('');
}
