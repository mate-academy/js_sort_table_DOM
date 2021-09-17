'use strict';

const tableHeader = document.querySelector('thead');

tableHeader.addEventListener('click', e => {
  const column = e.target.closest('th').cellIndex;
  const tableBody = document.querySelector('tbody');
  const tableRows = [...tableBody.rows];

  tableRows.sort((a, b) => {
    if (!isNaN(+a.cells[column].innerText)) {
      return +a.cells[column].innerText - +b.cells[column].innerText;
    }

    if (a.cells[column].innerText.includes('$')) {
      return a.cells[column].innerText.slice(1).split(',').join('')
        - b.cells[column].innerText.slice(1).split(',').join('');
    }

    return a.cells[column].innerText.localeCompare(b.cells[column].innerText);
  });

  tableBody.append(...tableRows);
});
