'use strict';

const table = document.querySelector('table');
const headers = table.querySelectorAll('th');
const rows = Array.from(table.tBodies[0].rows);
const sortingOrder = Array(headers.length).fill(0);

headers.forEach((header, columnIndex) => {
  header.addEventListener('click', () => {
    rows.sort((a, b) => {
      const aValue = a.cells[columnIndex].textContent.trim();
      const bValue = b.cells[columnIndex].textContent.trim();

      if (!sortingOrder[columnIndex]) {
        return aValue.localeCompare(bValue, undefined, { numeric: true });
      } else {
        return bValue.localeCompare(aValue, undefined, { numeric: true });
      }
    });

    rows.forEach(row => table.tBodies[0].removeChild(row));
    rows.forEach(row => table.tBodies[0].appendChild(row));
    sortingOrder[columnIndex] = sortingOrder[columnIndex] === 0 ? 1 : 0;

    headers.forEach((tHeader, index) => {
      if (index === columnIndex) {
        tHeader.classList.toggle('ascending', sortingOrder[columnIndex] === 0);
        tHeader.classList.toggle('descending', sortingOrder[columnIndex] === 1);
      } else {
        header.classList.remove('ascending', 'descending');
      }
    });
  });
});
