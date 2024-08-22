'use strict';

const table = document.querySelector('table');
const headers = table.querySelectorAll('th');
const tbody = table.querySelector('tbody');
const rows = [...tbody.querySelectorAll('tr')];

headers.forEach((header, index) => {
  const isIntegerColumn = index === 2 || index === 3;

  header.addEventListener('click', () => {
    rows.sort((rowA, rowB) => {
      const cellA = rowA.cells[index].textContent.trim();
      const cellB = rowB.cells[index].textContent.trim();

      if (isIntegerColumn) {
        const valueA = parseFloat(cellA.replace('$', ''));
        const valueB = parseFloat(cellB.replace('$', ''));

        return valueA - valueB;
      } else {
        return cellA.localeCompare(cellB);
      }
    });

    rows.forEach((row) => tbody.appendChild(row));
  });
});
