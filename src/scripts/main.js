'use strict';

// write code here
document.addEventListener('DOMContentLoaded', () => {
  const table = document.querySelector('table');
  const thead = table.querySelector('thead');
  const tbody = table.querySelector('tbody');
  const headers = thead.querySelectorAll('th');

  function sortColumn(columnIndex) {
    const rows = Array.from(tbody.querySelectorAll('tr'));

    rows.sort((rowA, rowB) => {
      const cellA = rowA.children[columnIndex].textContent;
      const cellB = rowB.children[columnIndex].textContent;

      if (columnIndex === 2) {
        return parseInt(cellA) - parseInt(cellB);
      } else if (columnIndex === 3) {
        const salaryA = parseFloat(cellA.replace('$', '').replace(',', ''));
        const salaryB = parseFloat(cellB.replace('$', '').replace(',', ''));

        return salaryA - salaryB;
      } else {
        return cellA.localeCompare(cellB);
      }
    });

    while (tbody.firstChild) {
      tbody.removeChild(tbody.firstChild);
    }

    rows.forEach(row => {
      tbody.appendChild(row);
    });
  }

  headers.forEach((header, index) => {
    header.addEventListener('click', () => {
      sortColumn(index);
    });
  });
});
