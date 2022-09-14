'use strict';

const tableBody = document.querySelector('tbody');
const headlines = document.querySelector('thead')
  .getElementsByTagName('th');
const lowerHeadlines = document.querySelector('tfoot')
  .getElementsByTagName('th');

for (let i = 0; i < headlines.length; i++) {
  headlines[i].addEventListener('click', () => {
    Array.from(tableBody.children)
      .sort((prevRow, currentRow) =>
        sortedTable(prevRow, currentRow, i))
      .forEach(row => {
        row.remove();
        tableBody.append(row);
      });
  });

  lowerHeadlines[i].addEventListener('click', () => {
    Array.from(tableBody.children)
      .sort((prevRow, currentRow) =>
        sortedTable(prevRow, currentRow, i))
      .forEach(row => {
        row.remove();
        tableBody.append(row);
      });
  });
}

function sortedTable(prevRow, currentRow, i) {
  switch (i) {
    case 2:
      return prevRow.cells[i].textContent
        - currentRow.cells[i].textContent;
    case 3:
      return prevRow.cells[i].textContent
        .split('$')[1]
        .split(',')
        .join('')
        - currentRow.cells[i].textContent
          .split('$')[1]
          .split(',')
          .join('');

    default:
      if (prevRow.cells[i].textContent
        === currentRow.cells[i].textContent) {
        return 0;
      }

      if (prevRow.cells[i].textContent
        > currentRow.cells[i].textContent) {
        return 1;
      } else {
        return -1;
      }
  }
}
