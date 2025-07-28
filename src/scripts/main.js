'use strict';

const headers = document.querySelectorAll('th');
const tbody = document.querySelector('tbody');

headers.forEach((header, columnIndex) => {
  header.addEventListener('click', () => {
    const rowsArray = Array.from(tbody.querySelectorAll('tr'));

    const sortedRows = rowsArray.sort((a, b) => {
      const cellA = a.cells[columnIndex].textContent.trim();
      const cellB = b.cells[columnIndex].textContent.trim();

      const numA = parseFloat(cellA);
      const numB = parseFloat(cellB);

      if (!isNaN(numA) && !isNaN(numB)) {
        return numA - numB;
      } else {
        return cellA.localeCompare(cellB);
      }
    });

    tbody.innerHTML = '';
    sortedRows.forEach((row) => tbody.appendChild(row));
  });
});
