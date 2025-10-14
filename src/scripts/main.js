'use strict';

// write code here
document.addEventListener('DOMContentLoaded', () => {
  const table = document.querySelector('table');
  const headers = table.querySelectorAll('th');
  const tbody = table.querySelector('tbody');

  headers.forEach((header, index) => {
    header.addEventListener('click', () => {
      // Отримуємо всі рядки з tbody
      const rows = Array.from(tbody.querySelectorAll('tr'));

      // Визначаємо тип колонки
      const isNumeric =
        header.textContent === 'Age' || header.textContent === 'Salary';

      // Сортуємо рядки
      rows.sort((a, b) => {
        const cellA = a.children[index].textContent.trim();
        const cellB = b.children[index].textContent.trim();

        if (isNumeric) {
          // Для Salary прибираємо $, коми тощо
          const numA = parseFloat(cellA.replace(/[^0-9.]/g, ''));
          const numB = parseFloat(cellB.replace(/[^0-9.]/g, ''));

          return numB - numA; // від більшого до меншого
        } else {
          // Алфавітне сортування (A-Z)
          return cellA.localeCompare(cellB);
        }
      });

      // Перезаписуємо відсортовані рядки в таблицю
      tbody.innerHTML = '';
      rows.forEach((row) => tbody.appendChild(row));
    });
  });
});
