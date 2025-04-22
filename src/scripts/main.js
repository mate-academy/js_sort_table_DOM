'use strict';

const tableHead = document.querySelector('thead');
const tableBody = document.querySelector('tbody');

tableHead.addEventListener('click', (e) => {
  const column = e.target.closest('th');

  if (!column) {
    return;
  }

  const columnIndex = column.cellIndex;

  const rows = tableBody.querySelectorAll('tr');
  let sortedRows;

  if (column.textContent === 'Name' || column.textContent === 'Position') {
    sortedRows = Array.from(rows).sort((a, b) => {
      const aText = a.cells[columnIndex].textContent;
      const bText = b.cells[columnIndex].textContent;

      return aText.localeCompare(bText);
    });
  } else {
    sortedRows = Array.from(rows).sort((a, b) => {
      const aNum = Number(
        a.cells[columnIndex].textContent
          .split(',')
          .join('')
          .split('$')
          .join(''),
      );
      const bNum = Number(
        b.cells[columnIndex].textContent
          .split(',')
          .join('')
          .split('$')
          .join(''),
      );

      return aNum - bNum;
    });
  }

  sortedRows.forEach((row) => tableBody.appendChild(row));
});
