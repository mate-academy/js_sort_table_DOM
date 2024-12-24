'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const table = document.querySelector('.employees-table');

  if (!table) {
    return;
  }

  const headers = table.querySelectorAll('th');
  const rows = Array.from(table.querySelectorAll('tbody tr'));

  headers.forEach((header, index) => {
    header.addEventListener('click', () => {
      const isNumeric = header.dataset.type === 'number';
      const sortedRows = rows.sort((rowA, rowB) => {
        const cellA = rowA.children[index].textContent.trim();
        const cellB = rowB.children[index].textContent.trim();

        if (isNumeric) {
          return parseFloat(cellA) - parseFloat(cellB);
        } else {
          return cellA.localeCompare(cellB);
        }
      });

      // Очищаємо таблицю та додаємо відсортовані рядки
      const tbody = table.querySelector('tbody');

      tbody.innerHTML = '';
      sortedRows.forEach((row) => tbody.appendChild(row));
    });
  });
});
