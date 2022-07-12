'use strict';

// const header = document.querySelector('thead');
// const bodyTable = document.querySelector('tbody');

// header.addEventListener('click', (e) => {
//   const index = e.target.cellIndex;
//   const rows = bodyTable.rows;

//   const sortedList = [...rows].sort((a, b) => {
//     const row1 = a.cells[index].innerText.replace(/[$,]/g, '');
//     const row2 = b.cells[index].innerText.replace(/[$,]/g, '');

//     if (e.target.innerText === 'Name' || e.target.innerText === 'Position') {
//       return row1.localeCompare(row2);
//     } else {
//       return row1 - row2;
//     }
//   });

//   bodyTable.append(...sortedList);
// });

const header = document.querySelector('thead');
const table = document.querySelector('tbody');

function getNumber(string) {
  return string.slice(1).split(',').join('');
};

header.addEventListener('click', (e) => {
  const sortBy = e.target.innerText;

  switch (sortBy) {
    case 'Name':
      const sortByName = [...table.rows].sort((a, b) => {
        return a.cells[0].innerText.localeCompare(b.cells[0].innerText);
      });

      table.append(...sortByName);
      break;

    case 'Position':
      const sortByPosition = [...table.rows].sort((a, b) => {
        return a.cells[1].innerText.localeCompare(b.cells[1].innerText);
      });

      table.append(...sortByPosition);
      break;

    case 'Age':
      const sortByAge = [...table.rows].sort((a, b) => {
        return a.cells[2].innerText - b.cells[2].innerText;
      });

      table.append(...sortByAge);
      break;

    case 'Salary':
      const sortBySalary = [...table.rows].sort((a, b) => {
        return getNumber(a.cells[3].innerText)
        - getNumber(b.cells[3].innerText);
      });

      table.append(...sortBySalary);
      break;
  }
});
