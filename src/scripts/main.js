'use strict';

const titleElement = document.querySelectorAll('th');

titleElement.forEach((title) => {
  title.addEventListener('click', () => {
    // находим ближайшую таблицу
    const table = title.closest('table');
    // определяем индекс колонки
    const columnIndex = title.cellIndex;
    // получаем массив строк, чтобы применить к ним сортировку
    const rows = Array.from(table.querySelectorAll('tbody tr'));
    const sortedRows = rows.sort((rowA, rowB) => {
      const cellA = rowA.querySelectorAll('td')[columnIndex].innerText.trim();
      const cellB = rowB.querySelectorAll('td')[columnIndex].innerText.trim();

      let valueA, valueB;

      if (columnIndex === 2) {
        valueA = parseFloat(cellA, 10);
        valueB = parseFloat(cellB, 10);
      } else if (columnIndex === 3) {
        valueA = parseFloat(cellA.replace(/[$,]/g, ''));
        valueB = parseFloat(cellB.replace(/[$,]/g, ''));
      } else {
        valueA = cellA;
        valueB = cellB;
      }

      if (typeof valueA === 'number' && typeof valueB === 'number') {
        return valueA - valueB;
      } else {
        return valueA.localeCompare(valueB);
      }
    });
    const tableBody = document.querySelector('tbody');

    sortedRows.forEach((row) => {
      tableBody.appendChild(row);
    });
  });
});
