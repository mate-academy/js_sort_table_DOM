'use strict';

const headers = document.querySelectorAll('thead th');
const tbody = document.querySelector('tbody');

headers.forEach((header, index) => {
  header.addEventListener('click', () => {
    const rows = Array.from(tbody.querySelectorAll('tr'));

    rows.sort((rowA, rowB) => {
      const cellA = rowA.children[index].textContent.trim();
      const cellB = rowB.children[index].textContent.trim();

      if (index === 2) {
        return Number(cellA) - Number(cellB);
      }

      if (index === 3) {
        const valA = Number(cellA.replace(/[^0-9.-]+/g, ''));
        const valB = Number(cellB.replace(/[^0-9.-]+/g, ''));

        return valA - valB;
      }

      return cellA.localeCompare(cellB);
    });

    tbody.append(...rows);
  });
});
