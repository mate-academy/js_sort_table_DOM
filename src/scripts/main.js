'use strict';

// write code here

document.addEventListener('DOMContentLoaded', () => {
  const table = document.querySelector('table');
  const headers = table.querySelectorAll('th');
  const tableBody = table.querySelector('tbody');
  const rows = Array.from(tableBody.querySelectorAll('tr'));

  headers.forEach((header, index) => {
    header.addEventListener('click', () => {
      const isNumericColumn = index === 2 || index === 3;
      const sortedRows = [...rows].sort((a, b) => {
        const cellA = a.cells[index].textContent.trim();
        const cellB = b.cells[index].textContent.trim();

        return isNumericColumn
          ? compareNumeric(cellA, cellB)
          : cellA.localeCompare(cellB);
      });

      tableBody.innerHTML = '';
      sortedRows.forEach((row) => tableBody.appendChild(row));
    });
  });

  function compareNumeric(a, b) {
    const numA = parseFloat(a.replace(/[^\d.-]/g, ''));
    const numB = parseFloat(b.replace(/[^\d.-]/g, ''));

    return numA - numB;
  }
});
