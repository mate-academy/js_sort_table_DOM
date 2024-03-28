'use strict';

const table = document.querySelector('table');
const body = document.querySelector('tbody');
const rows = body.querySelectorAll('tr');

function convertToNumber(str) {
  const newStr = str.replace('$', '').split(',').join('');

  return parseInt(newStr);
};

table.addEventListener('click', (e) => {
  if (e.target.tagName === 'TH') {
    const rowsArr = [...rows];

    const sortBy = e.target.textContent;

    switch (sortBy) {
      case 'Name':
        rowsArr.sort((a, b) =>
          a.cells[0].textContent.localeCompare(b.cells[0].textContent));
        break;

      case 'Position':
        rowsArr.sort((a, b) =>
          a.cells[1].textContent.localeCompare(b.cells[1].textContent));
        break;

      case 'Age':
        rowsArr.sort((a, b) =>
          +a.cells[2].textContent - +b.cells[2].textContent);
        break;

      case 'Salary':
        rowsArr.sort((a, b) => {
          const numA = convertToNumber(a.cells[3].textContent);
          const numB = convertToNumber(b.cells[3].textContent);

          return numA - numB;
        });
        break;

      default:
        break;
    }

    body.innerHTML = '';
    rowsArr.forEach(row => body.append(row));
  }
});
