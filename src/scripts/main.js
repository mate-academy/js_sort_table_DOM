'use strict';

function sortTable() {
  const table = document.querySelector('table');

  if (!table) {
    return;
  }

  const headers = table.querySelectorAll('th');

  for (const th of headers) {
    th.addEventListener('click', (e) => {
      const thEl = e.target.closest('th');

      if (!thEl) {
        return;
      }

      const index = thEl.cellIndex;
      const tbody = table.querySelector('tbody');

      if (!tbody) {
        return;
      }

      const rows = Array.from(tbody.rows);
      const numericPattern = /^-?[\d.,]+$/;

      rows.sort((a, b) => {
        const valA = a.cells[index].textContent.trim();
        const valB = b.cells[index].textContent.trim();

        const isNumA = numericPattern.test(valA);
        const isNumB = numericPattern.test(valB);

        if (isNumA && isNumB) {
          const numA = parseFloat(valA.replace(/[^\d.-]/g, ''));
          const numB = parseFloat(valB.replace(/[^\d.-]/g, ''));

          return numA - numB;
        }

        return valA.toLowerCase().localeCompare(valB.toLowerCase());
      });

      tbody.append(...rows);
    });
  }
}

sortTable();
