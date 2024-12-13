/* eslint-disable max-len */
'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const headers = document.querySelectorAll('#employee-table th');
  const table = document.querySelector('#employee-table');

  headers.forEach((header) => {
    header.addEventListener('click', () => {
      const columnIndex = Array.from(header.parentElement.children).indexOf(
        header,
      );

      sortTable(columnIndex);
    });
  });

  // Функция для сортировки таблицы по индексу столбца
  function sortTable(columnIndex) {
    const rows = Array.from(table.rows).slice(1); // Игнорируем первую строку (заголовки)
    const isNumberColumn = !isNaN(
      parseFloat(rows[0].cells[columnIndex].innerText),
    );

    rows.sort((rowA, rowB) => {
      const cellA = rowA.cells[columnIndex].innerText.trim();
      const cellB = rowB.cells[columnIndex].innerText.trim();

      const valueA = isNumberColumn ? parseFloat(cellA) : cellA.toLowerCase();
      const valueB = isNumberColumn ? parseFloat(cellB) : cellB.toLowerCase();

      if (valueA < valueB) {
        return -1;
      }

      if (valueA > valueB) {
        return 1;
      }

      return 0;
    });

    // Переставляем строки в таблице в отсортированном порядке
    rows.forEach((row) => table.appendChild(row));
  }
});
