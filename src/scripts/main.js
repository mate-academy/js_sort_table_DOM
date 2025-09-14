'use strict';

const table = document.querySelector('table');

if (table) {
  const thead = table.tHead;
  const tbody = table.tBodies[0];

  if (thead && tbody) {
    thead.addEventListener('click', (e) => {
      const target = e.target;

      if (!(target instanceof Element)) {
        return;
      }

      const th = target.closest('th');

      if (!th || !thead.contains(th)) {
        return;
      }

      const cellIndex = th.cellIndex;

      const rows = Array.from(tbody.rows);
      let sortedRows = [];

      if (cellIndex === 0 || cellIndex === 1) {
        sortedRows = rows.sort((a, b) => {
          const firstElement = a.cells[cellIndex].textContent.trim();
          const secondElement = b.cells[cellIndex].textContent.trim();

          return firstElement.localeCompare(secondElement);
        });
      }

      if (cellIndex === 2) {
        sortedRows = rows.sort((a, b) => {
          const firstElement = Number(a.cells[cellIndex].textContent.trim());
          const secondElement = Number(b.cells[cellIndex].textContent.trim());

          if (isNaN(firstElement) || isNaN(secondElement)) {
            return 0;
          }

          return firstElement - secondElement;
        });
      }

      if (cellIndex === 3) {
        sortedRows = rows.sort((a, b) => {
          const firstElement = Number(
            a.cells[cellIndex].textContent.trim().replace(/[^0-9.-]/g, ''),
          );

          const secondElement = Number(
            b.cells[cellIndex].textContent.trim().replace(/[^0-9.-]/g, ''),
          );

          if (isNaN(firstElement) || isNaN(secondElement)) {
            return 0;
          }

          return firstElement - secondElement;
        });
      }

      if (sortedRows.length) {
        tbody.append(...sortedRows);
      }
    });
  }
}
