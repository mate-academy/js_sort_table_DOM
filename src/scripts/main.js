'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const table = document.querySelector('.sortable');
  const headers = table.querySelectorAll('th');
  const tbody = table.querySelector('tbody');

  // Ініціалізація напрямку сортування: true — ASC, false — DESC
  const sortDirections = Array.from(headers).map(() => true);

  headers.forEach((header, index) => {
    header.addEventListener('click', () => {
      const rows = Array.from(tbody.querySelectorAll('tr'));

      // Перемикання напрямку сортування
      const ascending = sortDirections[index];

      sortDirections[index] = !ascending;

      // Сортуємо рядки
      rows.sort((a, b) => {
        const cellA = a.children[index].textContent.trim();
        const cellB = b.children[index].textContent.trim();
        const isNumeric = !isNaN(cellA) && !isNaN(cellB);

        if (isNumeric) {
          return ascending
            ? Number(cellA) - Number(cellB)
            : Number(cellB) - Number(cellA);
        } else {
          return ascending
            ? cellA.localeCompare(cellB)
            : cellB.localeCompare(cellA);
        }
      });

      // Оновлюємо DOM
      tbody.innerHTML = '';
      rows.forEach((row) => tbody.appendChild(row));

      // Стрілочки 🔽🔼
      headers.forEach((h, i) => {
        h.textContent = h.textContent.replace(/[\u2191\u2193]/g, '');

        if (i === index) {
          h.textContent += ascending ? ' ↑' : ' ↓';
        }
      });
    });
  });
});
