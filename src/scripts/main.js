'use strict';

const listForOrder = document.querySelector('thead');
const table = document.querySelector('tbody');

listForOrder.addEventListener('click', (e) => {
  const index = e.target.cellIndex;
  const rows = table.rows;

  const sortedList = [...rows].sort((a, b) => {
    const firstRow = a.cells[index].innerText.replace(/[$,]/g, '');
    const secondRow = b.cells[index].innerText.replace(/[$,]/g, '');

    if (e.target.innerText === 'Name' || e.target.innerText === 'Position') {
      return firstRow.localeCompare(secondRow);
    } else {
      return firstRow - secondRow;
    }
  });

  table.append(...sortedList);
});
