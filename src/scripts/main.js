'use strict';

// write code here
const table = document.querySelector('table');
const tbody = table.querySelector('tbody');

table.querySelectorAll('th').forEach((header, index) => {
  header.addEventListener('click', () => {
    const rows = Array.from(tbody.querySelectorAll('tr'));

    const isNumeric = index === 2 || index === 3;

    rows.sort((rowA, rowB) => {
      const cellA = rowA.children[index].textContent.trim();
      const cellB = rowB.children[index].textContent.trim();

      if (isNumeric) {
        const numA = parseFloat(cellA.replace(/[^\d.-]/g, ''));
        const numB = parseFloat(cellB.replace(/[^\d.-]/g, ''));

        return numA - numB;
      } else {
        return cellA.localeCompare(cellB);
      }
    });

    tbody.innerHTML = '';
    tbody.append(...rows);
  });
});
