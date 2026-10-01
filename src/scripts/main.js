'use strict';

const table = document.querySelector('table');

if (table) {
  const thead = table.querySelector('thead');
  const tbody = table.querySelector('tbody');

  if (thead && tbody) {
    thead.addEventListener('click', (e) => {
      const th = e.target.closest('th');

      if (!th) {
        return;
      }

      const columnIndex = th.cellIndex;
      const rows = Array.from(tbody.querySelectorAll('tr'));

      rows.sort((rowA, rowB) => {
        const cellA = rowA.cells[columnIndex].textContent.trim();
        const cellB = rowB.cells[columnIndex].textContent.trim();

        const cleanA = cellA.replace(/[$,]/g, '');
        const cleanB = cellB.replace(/[$,]/g, '');

        const numA = Number(cleanA);
        const numB = Number(cleanB);

        if (!Number.isNaN(numA) && !Number.isNaN(numB)) {
          return numA - numB;
        }

        // Иначе сравниваем как строки
        return cellA.localeCompare(cellB);
      });

      tbody.append(...rows);
    });
  }
}
