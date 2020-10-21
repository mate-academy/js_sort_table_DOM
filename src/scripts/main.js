'use strict';

const tableHeader = document.querySelector('thead');
const tableBody = document.querySelector('tbody');

function formatString(string) {
  return string.slice(1).split(',').join('');
}

tableHeader.addEventListener('click', ({ target }) => {
  const rows = [...tableBody.rows];
  const columnIndex = target.cellIndex;

  rows.sort((previous, current) => {
    let previousText = previous.cells[columnIndex].textContent;
    let currentText = current.cells[columnIndex].textContent;

    if (previousText.startsWith('$')) {
      previousText = formatString(previousText);
      currentText = formatString(currentText);
    }

    if (isNaN(+previousText)) {
      return previousText.localeCompare(currentText);
    }

    return +previousText - +currentText;
  });

  tableBody.append(...rows);
});
