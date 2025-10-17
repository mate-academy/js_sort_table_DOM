/* eslint-disable function-paren-newline */
/* eslint-disable prettier/prettier */
/* eslint-disable comma-dangle */
/* eslint-disable no-shadow */
'use strict';

'use strict';

const table = document.querySelector('table');
const tbody = table.querySelector('tbody');
const headers = table.querySelectorAll('thead th');

headers.forEach((header, index) => {
  header.addEventListener('click', () => {
    const rows = Array.from(tbody.querySelectorAll('tr'));

    rows.sort((rowA, rowB) => {
      const cellA = rowA.children[index].textContent.trim();
      const cellB = rowB.children[index].textContent.trim();

      if (header.textContent === 'Salary') {
        const numA = parseFloat(cellA.replace(/[^0-9.-]+/g, ''));
        const numB = parseFloat(cellB.replace(/[^0-9.-]+/g, ''));

        return numA - numB;
      }

      if (header.textContent === 'Age') {
        return Number(cellA) - Number(cellB);
      }

      return cellA.localeCompare(cellB);
    });

    tbody.innerHTML = '';
    rows.forEach(row => tbody.appendChild(row));
  });
});
