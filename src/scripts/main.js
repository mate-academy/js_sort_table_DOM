'use strict';

const table = document.querySelector('table');
const refs = {
  table,
  thead: table.querySelector('thead'),
  tbody: table.querySelector('tbody'),
};

refs.headers = refs.thead.querySelectorAll('th');

refs.headers.forEach((th, colIndex) => {
  th.addEventListener('click', () => {
    const rows = Array.from(refs.tbody.querySelectorAll('tr'));

    rows.sort((a, b) => {
      const cellA = a.children[colIndex].textContent.trim();
      const cellB = b.children[colIndex].textContent.trim();

      const numA = parseFloat(cellA.replace(/[^0-9.-]/g, ''));
      const numB = parseFloat(cellB.replace(/[^0-9.-]/g, ''));
      const bothNumeric = !isNaN(numA) && !isNaN(numB);

      return bothNumeric ? numA - numB : cellA.localeCompare(cellB);
    });

    rows.forEach((row) => refs.tbody.appendChild(row));
  });
});
