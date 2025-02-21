'use strict';

document.querySelectorAll('th').forEach((header, index) => {
  header.addEventListener('click', () => {
    const table = header.closest('table');
    const tbody = table.querySelector('tbody');
    const rows = Array.from(tbody.rows);

    rows.sort((rowA, rowB) => {
      const cellA = rowA.cells[index].textContent.trim();
      const cellB = rowB.cells[index].textContent.trim();

      return isNaN(cellA) || isNaN(cellB)
        ? cellA.localeCompare(cellB)
        : cellA - cellB;
    });

    tbody.append(...rows);
  });
});
