'use strict';

const th = document.querySelectorAll('th');
const tbody = document.querySelector('tbody');

th.forEach((item) => {
  item.addEventListener('click', (e) => {
    const idx = item.cellIndex;
    const sortedRows = Array.from(tbody.rows).sort((rowA, rowB) => {
      const contentA = rowA.cells[idx].textContent.trim();
      const contentB = rowB.cells[idx].textContent.trim();

      const cleanA = contentA.replace(/[^0-9.]/g, '');
      const cleanB = contentB.replace(/[^0-9.]/g, '');

      if (cleanA !== '' && cleanB !== '' && !isNaN(cleanA) && !isNaN(cleanB)) {
        return Number(cleanA) - Number(cleanB);
      }

      return contentA.localeCompare(contentB);
    });

    tbody.append(...sortedRows);
  });
});
