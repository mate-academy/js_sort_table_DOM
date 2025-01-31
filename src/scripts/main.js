'use strict';

const table = document.querySelector('table');
const headers = table.querySelectorAll('th');
const tbody = table.querySelector('tbody');

headers.forEach((header, index) => {
  header.addEventListener('click', () => {
    const rows = Array.from(tbody.querySelectorAll('tr'));

    rows.sort((rowA, rowB) => {
      const cellA = rowA.cells[index].textContent.trim();
      const cellB = rowB.cells[index].textContent.trim();

      if (index === 2) {
        return Number(cellA) - Number(cellB);
      } else if (index === 3) {
        return (
          Number(cellA.replace(/[$,]/g, '')) -
          Number(cellB.replace(/[$,]/g, ''))
        );
      } else {
        return cellA.localeCompare(cellB);
      }
    });

    tbody.append(...rows);
  });
});
