'use strict';

// write code here
document.addEventListener('DOMContentLoaded', () => {
  const table = document.querySelector('table');
  const headers = table.querySelectorAll('th');
  const tbody = table.querySelector('tbody');

  headers.forEach((header, index) => {
    header.addEventListener('click', () => {
      const rows = Array.from(tbody.querySelectorAll('tr'));

      rows.sort((rowA, rowB) => {
        let cellA = rowA.children[index].textContent.trim();
        let cellB = rowB.children[index].textContent.trim();

        // Якщо це число (вік)
        if (!isNaN(cellA) && !isNaN(cellB)) {
          return Number(cellA) - Number(cellB);
        }

        // Якщо це зарплата (сума з $)
        if (cellA.includes('$') && cellB.includes('$')) {
          cellA = Number(cellA.replace(/[^0-9.]/g, ''));
          cellB = Number(cellB.replace(/[^0-9.]/g, ''));

          return cellA - cellB;
        }

        // Для текстових значень
        return cellA.localeCompare(cellB);
      });

      // Оновлюємо таблицю після сортування
      tbody.innerHTML = '';
      rows.forEach((row) => tbody.appendChild(row));
    });
  });
});
