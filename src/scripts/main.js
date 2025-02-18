'use strict';

const theadElement = document.querySelector('thead');
const tBodyItem = document.querySelector('tbody');

theadElement.addEventListener('click', (e) => {
  const touchedElement = e.target.closest('th');

  if (!touchedElement) {
    return;
  }

  const columnToRemoveFirstChar = 3;
  const indexCell = touchedElement.cellIndex;
  const rows = [...tBodyItem.rows];

  const sortedColumn = [...rows]
    .map((row) => {
      let text = row.cells[indexCell].textContent.trim();

      if (indexCell === columnToRemoveFirstChar) {
        text = Number(text.slice(1).replaceAll(',', ''));
      }

      return text;
    })
    .sort((a, b) => {
      if (typeof a === 'string') {
        return a.toLowerCase().localeCompare(b.toLowerCase());
      } else {
        return a - b;
      }
    });

  sortedColumn.forEach((text, index) => {
    rows[index].cells[indexCell].textContent = text;

    if (indexCell === columnToRemoveFirstChar) {
      rows[index].cells[indexCell].textContent =
        `$${text.toLocaleString('en-US')}`;
    }
  });
});
