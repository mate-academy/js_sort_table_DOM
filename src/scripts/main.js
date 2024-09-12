'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const table = document.querySelector('table');
  const headers = table.querySelectorAll('th');

  headers.forEach((header, index) => {
    header.addEventListener('click', () => {
      sortTableByColumn(table, index);
    });
  });

  function sortTableByColumn(tablE, columnIndex) {
    const rows = Array.from(tablE.querySelectorAll('tbody > tr'));
    const isNumericColumn = rows.every((row) => {
      const cellValue = row.children[columnIndex].innerText
        .replace('$', '')
        .replace(',', '');

      return !isNaN(parseFloat(cellValue));
    });

    const sortedRows = rows.sort((a, b) => {
      const cellA = a.children[columnIndex].innerText;
      const cellB = b.children[columnIndex].innerText;

      if (isNumericColumn) {
        const numA = parseFloat(cellA.replace('$', '').replace(',', ''));
        const numB = parseFloat(cellB.replace('$', '').replace(',', ''));

        return numA - numB;
      } else {
        return cellA.localeCompare(cellB);
      }
    });

    while (table.querySelector('tbody').firstChild) {
      table
        .querySelector('tbody')
        .removeChild(table.querySelector('tbody').firstChild);
    }

    table.querySelector('tbody').append(...sortedRows);
  }
});
