'use strict';

// write code here
const headers = document.querySelectorAll('thead th');
const tbody = document.querySelector('tbody');

headers.forEach((header, index) => {
  header.addEventListener('click', () => {
    const rows = Array.from(tbody.querySelectorAll('tr'));

    rows.sort((rowA, rowB) => {
      const valueA = rowA.children[index].textContent.trim();
      const valueB = rowB.children[index].textContent.trim();

      return valueA.localeCompare(valueB, undefined, {
        numeric: true,
      });
    });

    tbody.append(...rows);
  });
});
