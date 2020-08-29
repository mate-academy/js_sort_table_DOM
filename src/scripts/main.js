'use strict';

const tableHaead = document.querySelector('thead');
const tableBody = document.querySelector('tbody');

tableHaead.addEventListener('click', (event) => {
  const itemInHead = event.target.closest('th');
  const columnIndex = itemInHead.cellIndex;
  const rows = [...tableBody.children];

  rows.sort((rowOne, rowTwo) => {
    let first = rowOne.cells[columnIndex].textContent;
    let second = rowTwo.cells[columnIndex].textContent;

    if (event.target.textContent === 'Age') {
      return (+first) - (+second);
    } else if (event.target.textContent === 'Salary') {
      first = +rowOne.cells[columnIndex].textContent.replace(/[$,]/g, '');
      second = +rowTwo.cells[columnIndex].textContent.replace(/[$,]/g, '');

      return (+first) - (+second);
    }

    return (first > second)
      ? 1
      : -1;
  });

  for (const row of rows) {
    tableBody.appendChild(row);
  }
});
