'use strict';

const table = document.querySelector('table');
const tbody = table.querySelector('tbody');
const headers = table.querySelectorAll('th');

headers.forEach((th, index) => {
  th.addEventListener('click', () => {
    const rows = Array.from(tbody.querySelectorAll('tr'));

    // Sort rows based on clicked column index
    rows.sort((rowA, rowB) => {
      const cellA = rowA.children[index].textContent.trim();
      const cellB = rowB.children[index].textContent.trim();

      // Try to compare as numbers if possible, otherwise as strings
      const numA = parseFloat(cellA.replace(',', '.'));
      const numB = parseFloat(cellB.replace(',', '.'));

      if (!isNaN(numA) && !isNaN(numB)) {
        return numA - numB; // numeric sort
      }

      return cellA.localeCompare(cellB); // string sort
    });

    // Re-append sorted rows to tbody
    rows.forEach((row) => tbody.appendChild(row));
  });
});
