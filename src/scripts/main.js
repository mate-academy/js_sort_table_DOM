'use strict';

const tableHeader = document.querySelector('thead');
const tableBody = document.querySelector('tbody');

tableHeader.addEventListener('click', (event) => {
  const rows = [...tableBody.querySelectorAll('tr')];
  const heading = event.target;
  const indexOfSortingCell = heading.cellIndex;

  rows.sort((prev, curr) => {
    let prevText = prev.cells[indexOfSortingCell].textContent;
    let currText = curr.cells[indexOfSortingCell].textContent;

    if (prevText.startsWith('$')) {
      prevText = prevText.slice(1).split(',').join('');
      currText = currText.slice(1).split(',').join('');
    }

    if (isNaN(+prevText)) {
      return prevText.localeCompare(currText);
    }

    return +prevText - +currText;
  });

  rows.forEach(row => {
    tableBody.appendChild(row);
  });
});
