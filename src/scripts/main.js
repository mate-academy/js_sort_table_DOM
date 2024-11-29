'use strict';

const theads = document.querySelectorAll('th');
const tbody = document.querySelector('tbody');

theads.forEach((header, index) => {
  header.addEventListener('click', () => {
    const rows = [...tbody.rows];

    rows.sort((rowA, rowB) => {
      const valueA = getCellValue(rowA, index);
      const valueB = getCellValue(rowB, index);

      return isNaN(valueA) || isNaN(valueB)
        ? valueA.localeCompare(valueB)
        : valueA - valueB;
    });

    rows.forEach((row) => tbody.appendChild(row));
  });
});

function getCellValue(row, index) {
  const cell = row.cells[index].textContent;

  return cell.startsWith('$') ? parseFloat(cell.slice(1)) : cell;
}
