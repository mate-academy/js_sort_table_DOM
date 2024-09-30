'use strict';

const thead = document.querySelector('thead tr');

thead.addEventListener('click', (e) => {
  const clickedTh = e.target.closest('th');
  const columnIndex = clickedTh.cellIndex;
  const tbody = document.querySelector('tbody');
  const rows = Array.from(tbody.querySelectorAll('tr'));

  const sortedRows = rows.sort((rowA, rowB) => {
    const cellA = rowA.querySelectorAll('td')[columnIndex].textContent;
    const cellB = rowB.querySelectorAll('td')[columnIndex].textContent;

    const cellAHasDigits = hasDigits(cellA);
    const cellBHasDigits = hasDigits(cellB);

    if (cellAHasDigits && cellBHasDigits) {
      return convert(cellA) - convert(cellB);
    }

    if (!cellAHasDigits && !cellBHasDigits) {
      return cellA.localeCompare(cellB);
    }
  });

  tbody.innerHTML = '';

  sortedRows.forEach((row) => {
    tbody.appendChild(row);
  });
});

function convert(value) {
  return Number(value.replace(/[$,]/g, ''));
}

function hasDigits(str) {
  return /\d+/.test(str);
}
