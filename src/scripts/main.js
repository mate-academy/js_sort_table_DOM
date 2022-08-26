'use strict';

const table = document.querySelector('tbody');
const header = document.querySelector('thead');

function getNumber(num) {
  return +num.split('$').join('').split(',').join('');
}

header.addEventListener('click', e => {
  const targeted = e.target.innerText;

  switch (targeted) {
    case 'Name':
      const nameSort = [...table.rows].sort((a, b) => {
        return a.cells[0].innerText.localeCompare(b.cells[0].innerText);
      });

      table.append(...nameSort);
      break;

    case targeted === 'Position':
      const positionSort = [...table.rows].sort((a, b) => {
        return a.cells[1].innerText.localeCompare(b.cells[1].innerText);
      });

      table.append(...positionSort);
      break;

    case 'Age':
      const ageSort = [...table.rows].sort((a, b) => {
        return +a.cells[2].innerText - +b.cells[2].innerText;
      });

      table.append(...ageSort);
      break;

    case 'Salary':
      const salarySort = [...table.rows].sort((a, b) => {
        return getNumber(a.cells[3].innerText)
        - getNumber(b.cells[3].innerText);
      });

      table.append(...salarySort);
      break;

    default:
      break;
  }
});
