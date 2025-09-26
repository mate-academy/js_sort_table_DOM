'use strict';

const table = document.querySelector('table');
const headers = table.querySelectorAll('th');
const tbody = table.querySelector('tbody');

headers.forEach((header, index) => {
  header.addEventListener('click', () => {
    const rows = Array.from(tbody.querySelectorAll('tr'));

    rows.sort((a, b) => {
      const cellA = a.children[index].textContent.trim();
      const cellB = b.children[index].textContent.trim();

      if (index === 2) {
        return Number(cellA) - Number(cellB);
      }

      if (index === 3) {
        const numA = Number(cellA.replace(/[^0-9.-]+/g, ''));
        const numB = Number(cellB.replace(/[^0-9.-]+/g, ''));

        return numA - numB;
      }

      return cellA.localeCompare(cellB);
    });

    tbody.innerHTML = '';
    rows.forEach((row) => tbody.appendChild(row));
  });
});
