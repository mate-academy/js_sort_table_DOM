'use strict';

document.addEventListener('DOMContentLoaded', function () {
  const headers = document.querySelectorAll('thead th');
  const tbody = document.querySelector('tbody');

  headers.forEach((header, index) => {
    header.addEventListener('click', () => sortTable(index));
  });

  function sortTable(index) {
    const rows = Array.from(tbody.querySelectorAll('tr'));

    const sortedRows = rows.sort((rowA, rowB) => {
      const cellA = rowA.cells[index].textContent.trim();
      const cellB = rowB.cells[index].textContent.trim();

      const valueA =
        index === 3 ? parseFloat(cellA.replace(/[$,]/g, '')) || 0 : cellA;
      const valueB =
        index === 3 ? parseFloat(cellB.replace(/[$,]/g, '')) || 0 : cellB;

      return isNaN(valueA) ? valueA.localeCompare(valueB) : valueA - valueB;
    });

    tbody.append(...sortedRows);
  }
});
