'use strict';

const headlines = document.querySelector('thead').rows[0];
const list = document.querySelector('tbody');
const listRows = list.rows;

headlines.addEventListener('click', (e) => {
  const headline = e.target.closest('th');

  const index = headline.cellIndex;

  [...listRows].sort((a, b) => {
    const row = a.cells[index].textContent;
    const nextRow = b.cells[index].textContent;

    if (/\d/.test(row)) {
      const checkedRow = convertToNumber(row);
      const checkedNextRow = convertToNumber(nextRow);

      return +checkedRow - +checkedNextRow;
    }

    return row.localeCompare(nextRow);
  }).forEach(row => list.appendChild(row));
});

function convertToNumber(string) {
  const number = Number(string.replace(/[$,]/g, ''));

  return `${number}`;
}
