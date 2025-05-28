'use strict';

const table = document.querySelector('table');
const th = table.querySelectorAll('th');

th.forEach((column, index) => {
  column.addEventListener('click', () => {
    sortColumn(index);
  });
});

function sortColumn(index) {
  const rows = [...table.querySelectorAll('tbody>tr')];

  rows.sort((a, b) => {
    const cellA = a.cells[index].textContent.replace('$', '').replace(',', '');
    const cellB = b.cells[index].textContent.replace('$', '').replace(',', '');

    if (isNaN(+cellA)) {
      return cellA.localeCompare(cellB);
    }

    return parseFloat(cellA) - parseFloat(cellB);
  });

  table.querySelector('tbody').append(...rows);
}
