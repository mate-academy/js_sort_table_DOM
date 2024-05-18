'use strict';

// write code here
document.addEventListener('DOMContentLoaded', () => {
  const table = document.querySelector('table');
  const headers = table.querySelectorAll('th');

  headers.forEach((header, index) => {
    header.addEventListener('click', () => {
      sortTableByColumn(table, index);
    });
  });

  function sortTableByColumn(tbl, columnIndex) {
    const tbody = tbl.querySelector('tbody');
    const rows = Array.from(tbody.querySelectorAll('tr'));

    const sortedRows = rows.sort((a, b) => {
      const aText = a.children[columnIndex].textContent.trim();
      const bText = b.children[columnIndex].textContent.trim();

      if (columnIndex === 2 || columnIndex === 3) {
        const aValue =
          columnIndex === 2
            ? parseInt(aText, 10)
            : parseFloat(aText.replace(/[$,]/g, ''));
        const bValue =
          columnIndex === 2
            ? parseInt(bText, 10)
            : parseFloat(bText.replace(/[$,]/g, ''));

        return aValue - bValue;
      } else {
        return aText.localeCompare(bText);
      }
    });

    while (tbody.firstChild) {
      tbody.removeChild(tbody.firstChild);
    }

    sortedRows.forEach((row) => tbody.appendChild(row));
  }
});
