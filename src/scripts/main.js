'use strict';

document.addEventListener('DOMContentLoaded', function() {
  const tableElement = document.querySelector('table');
  const headers = tableElement.querySelectorAll('th');

  headers.forEach((header, index) => {
    header.addEventListener('click', () => {
      sortTableByColumn(tableElement, index);
    });
  });

  function sortTableByColumn(table, columnIndex) {
    const tbody = table.querySelector('tbody');
    const rows = [...tbody.querySelectorAll('tr')];

    rows.sort((a, b) => {
      const aValue
      = a.querySelector(`td:nth-child(${columnIndex + 1})`).textContent;
      const bValue
      = b.querySelector(`td:nth-child(${columnIndex + 1})`).textContent;

      return aValue.localeCompare(bValue, undefined, { numeric: true });
    });

    rows.forEach(row => tbody.appendChild(row));
  }
});
