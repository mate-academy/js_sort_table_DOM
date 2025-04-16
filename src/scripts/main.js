'use strict';

// write code here
const table = document.querySelector('table');
const tbody = table.querySelector('tbody');

// Об'єкт для зберігання напрямку сортування для кожного стовпця
const sortDirections = {};

table.querySelectorAll('th').forEach((th, columnIndex) => {
  th.addEventListener('click', () => {
    const rows = Array.from(tbody.rows);

    // Отримуємо поточний напрям (за замовчуванням 'asc')
    const currentDirection = sortDirections[columnIndex] || 'asc';

    rows.sort((rowA, rowB) => {
      const cellA = rowA.cells[columnIndex].textContent.trim();
      const cellB = rowB.cells[columnIndex].textContent.trim();

      const a = isNaN(cellA) ? cellA : Number(cellA);
      const b = isNaN(cellB) ? cellB : Number(cellB);

      // Залежно від напрямку — змінюємо порядок
      if (a > b) {
        return currentDirection === 'asc' ? 1 : -1;
      }

      if (a < b) {
        return currentDirection === 'asc' ? -1 : 1;
      }

      return 0;
    });

    // Перемикаємо напрямок сортування
    sortDirections[columnIndex] = currentDirection === 'asc' ? 'desc' : 'asc';

    // Додаємо відсортовані рядки
    tbody.append(...rows);
  });
});
