'use strict';

// write code here
document.addEventListener('DOMContentLoaded', () => {
  const table = document.querySelector('table');

  if (!table) {
    return;
  } // запобігає помилці, якщо таблиці немає

  const headers = table.querySelectorAll('th');
  const tbody = table.querySelector('tbody');

  headers.forEach((header, index) => {
    header.addEventListener('click', () => {
      const rows = Array.from(tbody.querySelectorAll('tr')).map((row, i) => ({
        element: row,
        index: i, // зберігаємо початковий індекс для стабільного сортування
      }));

      // Визначаємо тип колонки (краще через trim)
      const headerText = header.textContent.trim();
      const isNumeric = headerText === 'Age' || headerText === 'Salary';

      // Сортування
      rows.sort((a, b) => {
        const cellA = a.element.children[index].textContent.trim();
        const cellB = b.element.children[index].textContent.trim();

        if (isNumeric) {
          // ✅ очищаємо і конвертуємо в число, додаємо fallback 0
          const numA = parseFloat(cellA.replace(/[^0-9.]/g, '')) || 0;
          const numB = parseFloat(cellB.replace(/[^0-9.]/g, '')) || 0;

          // ✅ ASC (від меншого до більшого, як вимагає завдання)
          if (numA !== numB) {
            return numA - numB;
          }
        } else {
          // Алфавітне сортування
          const cmp = cellA.localeCompare(cellB);

          if (cmp !== 0) {
            return cmp;
          }
        }

        // Tie-breaker: зберігаємо початковий порядок
        return a.index - b.index;
      });

      // Оновлюємо DOM
      tbody.innerHTML = '';
      rows.forEach((r) => tbody.appendChild(r.element));
    });
  });
});
