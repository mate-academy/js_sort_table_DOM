'use strict';

const headRow = document.querySelector('thead');
const tableBody = document.querySelector('tbody');

function getNumber(num) {
  return +num.split('$').join('').split(',').join('');
}

headRow.addEventListener('click', e => {
  const sort = e.target.innerText;

  switch (true) {
    case sort === 'Name':
      const nameSort = [...tableBody.rows].sort((a, b) => {
        return a.cells[0].innerText.localeCompare(b.cells[0].innerText);
      });

      tableBody.append(...nameSort);
      break;

    case sort === 'Position':
      const positionSort = [...tableBody.rows].sort((a, b) => {
        return a.cells[1].innerText.localeCompare(b.cells[1].innerText);
      });

      tableBody.append(...positionSort);
      break;

    case sort === 'Age':
      const ageSort = [...tableBody.rows].sort((a, b) => {
        return +a.cells[2].innerText - +b.cells[2].innerText;
      });

      tableBody.append(...ageSort);
      break;

    case sort === 'Salary':
      const salarySort = [...tableBody.rows].sort((a, b) => {
        return getNumber(a.cells[3].innerText)
          - getNumber(b.cells[3].innerText);
      });

      tableBody.append(...salarySort);
      break;

    default:
      break;
  }
});
