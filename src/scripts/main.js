'use strict';

const thead = document.querySelector('thead');
const headTr = thead.querySelector('tr');
const clickHandler = (e) => {
  switch (e.target.textContent) {
    case 'Name':
      sortTable(0);
      break;
    case 'Position':
      sortTable(1);
      break;
    case 'Age':
      sortTable(2, true);
      break;
    case 'Salary':
      sortTable(3, true);
      break;
    default:
      break;
  }
};

for (const th of headTr.querySelectorAll('th')) {
  th.addEventListener('click', clickHandler);
}

function sortTable(columnIndex, isNumber = false) {
  const tableRows = document.querySelectorAll('tbody tr');
  const sortedRows = [...tableRows].sort((row1, row2) => {
    const column1 = row1.querySelectorAll('td')[columnIndex];
    const column2 = row2.querySelectorAll('td')[columnIndex];

    if (isNumber) {
      return (
        convertToNumber(column2.textContent) -
        convertToNumber(column1.textContent)
      );
    }

    return -column1.textContent.localeCompare(column2.textContent);
  });
  const tbody = document.querySelector('tbody');

  for (let i = 0; i < sortedRows.length; i++) {
    tbody.prepend(sortedRows[i]);
  }
}

function convertToNumber(number) {
  return +number.replace('$', '').replaceAll(',', '');
}
