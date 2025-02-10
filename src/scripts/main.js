'use strict';

// write code here
document.addEventListener('DOMContentLoaded', function () {
  const table = document.querySelector('table');
  const headers = table.querySelectorAll('th');

  const rows = Array.from(table.querySelectorAll('tbody tr'));

  function sortTable(index) {
    const isNumeric = index === 2 || index === 3;
    const sortedRows = rows.sort((a, b) => {
      const cellA = a.cells[index].innerText.trim();
      const cellB = b.cells[index].innerText.trim();

      if (isNumeric) {
        const valueA = parseFloat(cellA.replace(/[^\d.-]/g, ''));
        const valueB = parseFloat(cellB.replace(/[^\d.-]/g, ''));

        return valueA - valueB;
      }

      return cellA.localeCompare(cellB);
    });

    const tbody = table.querySelector('tbody');

    tbody.innerHTML = '';
    sortedRows.forEach((row) => tbody.appendChild(row));
  }

  // Добавляем обработчики кликов на заголовки
  headers.forEach((header, index) => {
    header.addEventListener('click', () => {
      sortTable(index);
    });
  });
});
