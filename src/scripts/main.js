'use strict';

document.querySelector('thead').addEventListener('click', (e) => {
  if (e.target.tagName === 'TH') {
    const index = e.target.cellIndex;
    const rows = Array.from(document.querySelectorAll('tbody tr'));
    const sortedRows = rows.sort((a, b) => {
      const aVal = a.children[index].textContent;
      const bVal = b.children[index].textContent;

      return aVal.localeCompare(bVal);
    });
    const tbody = document.querySelector('tbody');

    sortedRows.forEach((row) => tbody.appendChild(row));
  }
});
