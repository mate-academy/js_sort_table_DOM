'use strict';

document.querySelectorAll('th').forEach((header) => {
  header.addEventListener('click', () => {
    const table = header.closest('table');
    const columnIndex = Array.from(header.parentNode.children).indexOf(header);
    const rows = Array.from(table.querySelectorAll('tr')).slice(1);

    rows.sort((a, b) => {
      const cellA = a.children[columnIndex].textContent;
      const cellB = b.children[columnIndex].textContent;

      return cellA.localeCompare(cellB, undefined, { numeric: true });
    });

    rows.forEach((row) => table.appendChild(row));
  });
});
