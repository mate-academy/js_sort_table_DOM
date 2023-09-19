'use strict';

document.addEventListener('DOMContentLoaded', function() {
  const table = document.querySelector('table');
  const tbody = table.querySelector('tbody');
  const headers = table.querySelectorAll('th');
  let currentSortColumn = null;
  let isAscending = true;

  headers.forEach((header, index) => {
    header.addEventListener('click', () => {
      const columnIndex = index;

      if (columnIndex === currentSortColumn) {
        isAscending = !isAscending;
      } else {
        isAscending = true;
        currentSortColumn = columnIndex;
      }

      const rows = Array.from(tbody.querySelectorAll('tr'));

      rows.sort((a, b) => {
        const aValue = a.cells[columnIndex].textContent.trim();
        const bValue = b.cells[columnIndex].textContent.trim();

        const currencyRegex = /[$,]/g;
        const aNumber = parseFloat(aValue.replace(currencyRegex, ''));
        const bNumber = parseFloat(bValue.replace(currencyRegex, ''));

        if (!isNaN(aNumber) && !isNaN(bNumber)) {
          return isAscending ? aNumber - bNumber : bNumber - aNumber;
        } else {
          return isAscending ? aValue.localeCompare(bValue)
            : bValue.localeCompare(aValue);
        }
      });

      tbody.innerHTML = '';

      rows.forEach((row) => {
        tbody.appendChild(row);
      });
    });
  });
});
