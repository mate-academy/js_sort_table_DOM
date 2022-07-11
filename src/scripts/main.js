'use strict';

// write code here

const header = document.querySelector('thead');
const bodyTable = document.querySelector('tbody');

header.addEventListener('click', (e) => {
  const index = e.target.cellIndex;
  const rows = bodyTable.rows;

  const sortedList = [...rows].sort((a, b) => {
    const row1 = a.cells[index].innerText.replace(/[$,]/g, '');
    const row2 = b.cells[index].innerText.replace(/[$,]/g, '');

    if (e.target.innerText === 'Name' || e.target.innerText === 'Position') {
      return row1.localeCompare(row2);
    } else {
      return row1 - row2;
    }
  });

  bodyTable.append(...sortedList);
});
