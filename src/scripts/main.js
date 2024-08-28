'use strict';

const tableBody = document.querySelector('tbody');
const allRows = Array.from(tableBody.querySelectorAll('tr'));

document.addEventListener('click', (eve) => {
  const target = eve.target.closest('th');

  if (!target) {
    return;
  }

  const columnIndex = target.cellIndex;

  sortTable(columnIndex);
});

function cleanValue(value) {
  return value.replace(/[$,]/g, '').trim();
}

function sortTable(columnIndex) {
  const isNumeric = columnIndex === 2 || columnIndex === 3;

  allRows.sort((a, b) => {
    const aValue = cleanValue(a.cells[columnIndex].textContent);
    const bValue = cleanValue(b.cells[columnIndex].textContent);

    return isNumeric
      ? parseFloat(aValue) - parseFloat(bValue)
      : aValue.localeCompare(bValue);
  });

  allRows.forEach((row) => tableBody.appendChild(row));
}
