'use strict';

const thead = document.querySelector('thead');
const tbody = document.querySelector('tbody');

function convertToNumber(currency) {
  return Number(currency.split(',').join('.').slice(1));
}

thead.addEventListener('click', (e) => {
  if (e.target.tagName !== 'TH') {
    return;
  }

  const title = e.target.textContent;
  const index = e.target.cellIndex;

  const enlargedRows = [...tbody.rows].map((row) => {
    const valueCell = row.cells[index].textContent;

    switch (title) {
      case 'Salary':
        return [convertToNumber(valueCell), row];

      default:
        return [valueCell, row];
    }
  });

  const copyRows = [...enlargedRows].sort((row1, row2) => {
    switch (title) {
      case 'Name':
      case 'Position':
        return row1[0].localeCompare(row2[0]);

      case 'Age':
      case 'Salary':
        return row1[0] - row2[0];
    }
  });

  const sortRows = copyRows.map((item) => item[1]);

  tbody.replaceChildren(...sortRows);
});
