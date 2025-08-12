'use strict';

const headers = document.querySelectorAll('thead th');
const tbody = document.querySelector('tbody');

headers.forEach((header, index) => {
  header.addEventListener('click', () => {
    const rows = Array.from(tbody.querySelectorAll('tr'));

    // Sort rows in ASC order
    rows.sort((rowA, rowB) => {
      const cellA = rowA.querySelectorAll('td')[index].textContent.trim();
      const cellB = rowB.querySelectorAll('td')[index].textContent.trim();

      // Detect numbers (including $)
      const numA = parseFloat(cellA.replace(/[^0-9.]/g, ''));
      const numB = parseFloat(cellB.replace(/[^0-9.]/g, ''));

      if (!isNaN(numA) && !isNaN(numB)) {
        return numA - numB; // numeric sort
      }

      return cellA.localeCompare(cellB); // text sort
    });

    // Re-append sorted rows
    tbody.innerHTML = '';
    rows.forEach((row) => tbody.appendChild(row));
  });
});
