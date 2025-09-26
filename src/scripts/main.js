'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const table = document.querySelector('table');
  if (!table) return;

  const headers = table.querySelectorAll('th');
  const tbody = table.querySelector('tbody');

  headers.forEach((header, index) => {
    if (header.dataset.listenerAttached) {
      return;
    }
    header.dataset.listenerAttached = 'true';

    header.addEventListener('click', () => {
      const rows = Array.from(tbody.querySelectorAll('tr'));
      if (rows.length <= 1) return;

      rows.sort((a, b) => {
        const cellA = a.children[index]
          ? a.children[index].textContent.trim()
          : '';
        const cellB = b.children[index]
          ? b.children[index].textContent.trim()
          : '';

        if (!cellA && !cellB) return 0;
        if (!cellA) return -1;
        if (!cellB) return 1;

        const numA = Number(cellA.replace(/[^0-9.-]+/g, ''));
        const numB = Number(cellB.replace(/[^0-9.-]+/g, ''));

        const isNumA = Number.isFinite(numA) && cellA !== '';
        const isNumB = Number.isFinite(numB) && cellB !== '';

        if (isNumA && isNumB) {
          return numA - numB;
        }

        return cellA.toLowerCase().localeCompare(cellB.toLowerCase());
      });

      const fragment = document.createDocumentFragment();
      rows.forEach(row => fragment.appendChild(row));
      tbody.innerHTML = '';
      tbody.appendChild(fragment);
    });
  });
});
