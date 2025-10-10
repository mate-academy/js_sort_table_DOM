'use strict';

function sortTable() {
  const table = document.querySelector('table');

  if (!table) {
    return;
  }

  const headers = table.querySelectorAll('th');

  for (const th of headers) {
    th.addEventListener('click', (e) => {
      const index = e.target.cellIndex;
      const tbody = table.querySelector('tbody');
      const rows = Array.from(tbody.rows);

      rows.sort((a, b) => {
        const valA = a.cells[index].textContent.trim();
        const valB = b.cells[index].textContent.trim();

        const numA = parseFloat(valA.replace(/[^\d.-]/g, ''));
        const numB = parseFloat(valB.replace(/[^\d.-]/g, ''));

        if (!isNaN(numA) && !isNaN(numB)) {
          return numA - numB;
        }

        return valA.localeCompare(valB);
      });

      tbody.append(...rows);
    });
  }
}

sortTable();
