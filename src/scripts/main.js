'use strict';

const tableColumns = [...document.querySelectorAll('table thead th')];
const tableBody = document.querySelector('table tbody');
const tableRows = [...tableBody.children];

document.addEventListener('click', (e) => {
  const { target } = e;

  if (tableColumns.includes(target)) {
    const columnIndex = tableColumns.indexOf(target);

    tableRows.sort((rowA, rowB) => {
      const { textContent: cellA } = rowA.children[columnIndex];
      const { textContent: cellB } = rowB.children[columnIndex];

      switch (target.textContent) {
        case 'Name':
        case 'Position':
        default:
          return cellA.localeCompare(cellB);

        case 'Age':
        case 'Salary':
          return +cellA.replace(/\D/g, '') - +cellB.replace(/\D/g, '');
      }
    });
  }

  tableBody.append(...tableRows);
});
