'use strict';

document.querySelectorAll('th').forEach((header, index) => {
  header.addEventListener('click', () => {
    const table = header.closest('table');
    const tbody = table.querySelector('tbody');
    const rows = Array.from(tbody.querySelectorAll('tr'));

    const getCellValue = (row, idx) => {
      const cellText = row.cells[idx].innerText.trim();

      if (idx === 2 || idx === 3) {
        return parseFloat(cellText.replace(/[^0-9.-]+/g, ''));
      }

      return cellText;
    };

    rows.sort((rowA, rowB) => {
      const valA = getCellValue(rowA, index);
      const valB = getCellValue(rowB, index);

      return valA > valB ? 1 : valA < valB ? -1 : 0;
    });

    rows.forEach((row) => tbody.appendChild(row));
  });
});
