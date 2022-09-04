'use strict';

const head = document.querySelector('thead');
const body = document.querySelector('tbody');

head.addEventListener('click', e => {
  const index = e.target.closest('th').cellIndex;
  const rows = [...body.rows];

  const sortTable = rows.sort((a, b) => {
    const valueA = a.cells[index].innerText.replace(/[$,]/g, '');
    const valueB = b.cells[index].innerText.replace(/[$,]/g, '');

    if (isNaN(valueA)) {
      return valueA.localeCompare(valueB);
    } else {
      return valueA - valueB;
    };
  });

  body.append(...sortTable);
});
