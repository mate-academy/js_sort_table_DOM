'use strict';

const ths = document.querySelector('thead');
const tbody = document.querySelector('tbody');
let sort = 1;

ths.addEventListener('click', (e) => {
  const indexColumn = e.target.cellIndex;

  const sortedRows = [...tbody.rows].sort((a, b) => {
    if (a.cells[indexColumn].innerText.startsWith('$')) {
      return (a.cells[indexColumn].innerText.replace('$', '').replace(',', '')
       - b.cells[indexColumn].innerText.replace('$', '').replace(',', ''))
        * sort;
    } else {
      return a.cells[indexColumn].innerText
        .localeCompare(b.cells[indexColumn].innerText)
         * sort;
    }
  });

  sort *= -1;
  tbody.append(...sortedRows);
});
