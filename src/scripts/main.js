'use strict';

const table = document.querySelector('table');
let currentSortColumn = null;
let isAscending = true;

table.addEventListener('click', (e) => {
  if (e.target.tagName !== 'TH') return;

  const header = e.target;
  const columnIndex = header.cellIndex;
  const tbody = table.querySelector('tbody');
  const rows = Array.from(tbody.rows);

  // Проверка: если клик по той же колонке — поменяй порядок
  if (currentSortColumn === columnIndex) {
    isAscending = !isAscending;
  } else {
    currentSortColumn = columnIndex;
    isAscending = true;
  }

  rows.sort((rowA, rowB) => {
    const a = rowA.cells[columnIndex].textContent.trim();
    const b = rowB.cells[columnIndex].textContent.trim();

    // Числа сортируем как числа, остальное как строки
    const valA = isNaN(a) ? a : parseFloat(a);
    const valB = isNaN(b) ? b : parseFloat(b);

    if (valA > valB) return isAscending ? 1 : -1;
    if (valA < valB) return isAscending ? -1 : 1;
    return 0;
  });

  // Очищаем тело таблицы и добавляем отсортированные строки
  tbody.innerHTML = '';
  rows.forEach(row => tbody.appendChild(row));
});
