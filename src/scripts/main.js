'use strict';

const header = document.querySelector('thead');
const table = document.querySelector('tbody');

function getNumber(string) {
  return string.slice(1).split(',').join('');
};

header.addEventListener('click', (ev) => {
  const sortBy = ev.target.innerHTML;

  switch (sortBy) {
    case 'Name':
      const sortByName = [...table.rows].sort((a, b) => {
        return a.cells[0].innerHTML.localeCompare(b.cells[0].innerHTML);
      });

      table.append(...sortByName);
      break;

    case 'Position':
      const sortByPosition = [...table.rows].sort((a, b) => {
        return a.cells[1].innerHTML.localeCompare(b.cells[1].innerHTML);
      });

      table.append(...sortByPosition);
      break;

    case 'Age':
      const sortByAge = [...table.rows].sort((a, b) => {
        return a.cells[2].innerHTML - b.cells[2].innerHTML;
      });

      table.append(...sortByAge);
      break;

    case 'Salary':
      const sortBySalary = [...table.rows].sort((a, b) => {
        return getNumber(a.cells[3].innerHTML)
        - getNumber(b.cells[3].innerHTML);
      });

      table.append(...sortBySalary);
      break;
    default:
      break;
  }
});
