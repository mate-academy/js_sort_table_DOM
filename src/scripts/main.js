'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const table = document.querySelector('table');
  const thead = table.querySelector('thead');

  thead.addEventListener('click', (e) => {
    if (e.target.tagName !== 'TH') {
      return;
    }

    const th = e.target;
    const headerCells = Array.from(th.parentElement.children);
    const columnIndex = headerCells.indexOf(th);

    const tbody = table.querySelector('tbody');
    const rows = Array.from(tbody.querySelectorAll('tr'));

    rows.sort((a, b) => {
      const cellA = a.children[columnIndex].textContent.trim();
      const cellB = b.children[columnIndex].textContent.trim();

      if (columnIndex === 2) {
        return parseFloat(cellA) - parseFloat(cellB);
      }

      if (columnIndex === 3) {
        const numA = parseFloat(cellA.replace(/[^0-9.]/g, ''));
        const numB = parseFloat(cellB.replace(/[^0-9.]/g, ''));

        return numA - numB;
      }

      return cellA.localeCompare(cellB);
    });

    rows.forEach((row) => tbody.appendChild(row));
  });
});
