'use strict';

const tableNames = document.querySelectorAll('thead th');

tableNames.forEach((element, index) => {
  element.addEventListener('click', () => sortTable(index));
});

function sortTable(index) {
  const tableBody = document.querySelector('tbody');
  const rows = Array.from(tableBody.querySelectorAll('tr'));

  rows.sort((rowA, rowB) => {
    const cellA = rowA.cells[index].textContent.trim();
    const cellB = rowB.cells[index].textContent.trim();

    return compareValues(cellA, cellB, index);
  });

  tableBody.append(...rows);
}

function compareValues(cellA, cellB, index) {
  if (index <= 1) {
    return cellA.localeCompare(cellB);
  }

  if (index === 3) {
    const valueA = parseFloat(cellA.replace(/[$,]/g, '')) || 0;
    const valueB = parseFloat(cellB.replace(/[$,]/g, '')) || 0;

    return valueA - valueB;
  }

  return parseFloat(cellA) - parseFloat(cellB);
}
