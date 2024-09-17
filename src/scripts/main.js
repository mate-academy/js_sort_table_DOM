'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const table = document.querySelector('table');
  const tbody = table.querySelector('tbody');

  table.addEventListener('click', (e) => {
    if (e.target.tagName === 'TH') {
      const columnIndex = Array.from(e.target.parentNode.children).indexOf(
        e.target,
      );
      const rows = Array.from(tbody.rows);

      rows.sort((a, b) => {
        const aValue = a.cells[columnIndex].textContent.trim();
        const bValue = b.cells[columnIndex].textContent.trim();

        return aValue.localeCompare(bValue, undefined, { numeric: true });
      });

      rows.forEach((row) => tbody.removeChild(row));

      rows.forEach((row) => tbody.appendChild(row));
    }
  });
});
