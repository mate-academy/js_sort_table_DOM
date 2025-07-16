'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const table = document.querySelector('table');
  const headers = table.querySelectorAll('thead th');
  const tbody = table.querySelector('tbody');
  let index = 0;

  headers.forEach((header, i) => {
    header.addEventListener('click', () => {
      index = i;
      sortTableByColumn(index);
    });
  });

  const sortTableByColumn = (columnIndex) => {
    const rows = [...tbody.querySelectorAll('tr')];

    const getCellValue = (row) => {
      const cellText = row.children[columnIndex].textContent.trim();

      if (columnIndex === 3) {
        return Number(cellText.replace(/[^0-9.-]+/g, ''));
      }

      if (columnIndex === 2) {
        return Number(cellText);
      }

      return cellText.toLowerCase();
    };

    rows.sort((a, b) => {
      const aVal = getCellValue(a);
      const bVal = getCellValue(b);

      if (typeof aVal === 'string' && typeof bVal === 'string') {
        return aVal.localeCompare(bVal);
      }

      return aVal - bVal;
    });

    tbody.innerHTML = '';
    rows.forEach((row) => tbody.appendChild(row));
  };
});
