'use strict';

function sortByAsc(cellIndex) {
  const table = document.querySelector('table');
  const tbody = table.querySelector('tbody');
  const rows = Array.from(tbody.querySelectorAll('tr'));

  rows.sort((a, b) => {
    const aVal = a.cells[cellIndex].textContent;
    const bVal = b.cells[cellIndex].textContent;

    if (cellIndex === 2 || cellIndex === 3) {
      // eslint-disable-next-line max-len
      return Number(aVal.replace(/[$,]/g, '')) - Number(bVal.replace(/[$,]/g, ''));
    } else {
      return aVal.localeCompare(bVal, {
        numeric: 'true', sensitivity: 'base',
      });
    }
  });

  rows.forEach((row) => {
    tbody.removeChild(row);
  });

  rows.forEach((row) => {
    tbody.appendChild(row);
  });
}

const headers = document.querySelectorAll('th');

headers.forEach((header, index) => {
  header.addEventListener('click', () => {
    sortByAsc(index);
  });
});
