'use strict';

const header = document.querySelector('thead');
const buttons = header.querySelectorAll('th');

buttons.forEach((button, index) => {
  button.addEventListener('click', () => sortingData(index));
});

function sortingData(columnNumber) {
  const table = document.querySelector('tbody');
  const rows = Array.from(table.querySelectorAll('tr'));

  rows.sort((item1, item2) => {
    const cell1 = item1.querySelectorAll('td')[columnNumber].textContent.trim();
    const cell2 = item2.querySelectorAll('td')[columnNumber].textContent.trim();

    const columnHeader = document
      .querySelector('thead')
      .querySelectorAll('th')
      [columnNumber].textContent.trim()
      .toLowerCase();

    const isNumeric = !isNaN(cell1) && !isNaN(cell2);
    const isSalary = columnHeader === 'salary';

    if (isSalary) {
      return parseFloat(cell1.slice(1)) - parseFloat(cell2.slice(1));
    } else if (isNumeric) {
      return parseFloat(cell1) - parseFloat(cell2);
    } else {
      return cell1.localeCompare(cell2);
    }
  });

  rows.forEach((row) => table.appendChild(row));
}
