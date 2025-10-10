'use strict';

function sortTable() {
  const table = document.querySelector('table');

  if (!table) {
    return;
  }

  const headers = table.querySelectorAll('th');

  for (const th of headers) {
    th.addEventListener('click', (e) => {
      const index = e.currentTarget.cellIndex;
      const tbody = table.querySelector('tbody');

      if (!tbody) {
        return;
      }

      const rows = Array.from(tbody.rows);

      rows.sort((a, b) => {
        const valA = (a.cells[index]?.textContent || '').trim();
        const valB = (b.cells[index]?.textContent || '').trim();

        const cleanedA = valA.replace(/[ ,$₴£]/g, '');
        const cleanedB = valB.replace(/[ ,$₴£]/g, '');

        const isNumA = /^-?\d+(\.\d+)?$/.test(cleanedA);
        const isNumB = /^-?\d+(\.\d+)?$/.test(cleanedB);

        if (isNumA && isNumB) {
          const numA = parseFloat(cleanedA);
          const numB = parseFloat(cleanedB);

          return numA - numB;
        }

        return valA.localeCompare(valB, undefined, { sensitivity: 'base' });
      });

      tbody.append(...rows);
    });
  }
}

sortTable();
