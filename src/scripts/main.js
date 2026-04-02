'use strict';

const table = document.querySelector('table');
const tbody = table.querySelector('tbody');
const thead = table.querySelector('thead');

thead.addEventListener('click', (e) => {
  const th = event.target.closest('th');

  if (!th) {
    return;
  }

  const columnIndex = th.cellIndex;
  const { type } = th.dataset;
  const rowsArray = Array.from(tbody.rows);

  // Правильне форматування для Prettier
  const isNumberColumn =
    type === 'number' ||
    th.textContent.trim().includes('Salary') ||
    th.textContent.trim().includes('Age');

  rowsArray.sort((rowA, rowB) => {
    const contentA = rowA.cells[columnIndex].textContent.trim();
    const contentB = rowB.cells[columnIndex].textContent.trim();

    if (isNumberColumn) {
      // Очищення від '$', ком та пробілів
      const numA = parseFloat(contentA.replace(/[^\d.-]/g, ''));
      const numB = parseFloat(contentB.replace(/[^\d.-]/g, ''));

      return numA - numB;
    }

    return contentA.localeCompare(contentB);
  });

  tbody.append(...rowsArray);
});
