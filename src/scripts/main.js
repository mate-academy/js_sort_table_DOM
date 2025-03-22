'use strict';

const headers = document.querySelectorAll('th');
const tbody = document.querySelector('tbody');

headers.forEach((header, index) => {
  header.addEventListener('click', function sortList() {
    const rows = Array.from(tbody.querySelectorAll('tr'));

    rows.sort((rowA, rowB) => {
      const cellA = rowA.children[index].textContent.trim().toLowerCase();
      const cellB = rowB.children[index].textContent.trim().toLowerCase();

      const numA = parseFloat(cellA.replace(/[$,]/g, ''));
      const numB = parseFloat(cellB.replace(/[$,]/g, ''));

      if (!isNaN(numA) && !isNaN(numB)) {
        return numA - numB;
      }

      return cellA.localeCompare(cellB);
    });

    tbody.innerHTML = '';

    rows.forEach((row) => {
      tbody.appendChild(row);
    });
  });
});
