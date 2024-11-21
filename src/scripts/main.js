'use strict';

const table = document.querySelector('table');
const headers = table.querySelectorAll('th');
const tbody = table.querySelector('tbody');

function sortTable(index) {
  const rowsArray = Array.from(tbody.rows);

  const sortedRows = rowsArray.sort((rowA, rowB) => {
    const cellA = rowA.cells[index].textContent.trim();
    const cellB = rowB.cells[index].textContent.trim();

    if (cellA.includes('$') && cellB.includes('$')) {
      return parseInt(cellA.slice(1)) - parseInt(cellB.slice(1));
    }

    if (!isNaN(cellA) && !isNaN(cellB)) {
      return cellA - cellB;
    }

    return cellA.localeCompare(cellB);
  });

  tbody.innerHTML = '';
  tbody.append(...sortedRows);
}

headers.forEach((header, index) => {
  header.addEventListener('click', () => {
    sortTable(index);
  });
});
