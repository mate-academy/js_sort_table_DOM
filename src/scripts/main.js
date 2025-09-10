'use strict';

// write code here
document.addEventListener("DOMContentLoaded", () => {
  const headers = document.querySelectorAll('thead th');
  const tbody = document.querySelector('tbody');

  headers.forEach((head, i) => {
    head.addEventListener('click', (e) => {
      const rows = Array.from(document.querySelectorAll('tbody tr'));

      rows.sort((a, b) => {
        const cellA = a.querySelector(`td:nth-child(${i + 1})`).textContent.trim();
        const cellB = b.querySelector(`td:nth-child(${i + 1})`).textContent.trim();

        switch(head.textContent) {
          case 'Age':
          case 'Salary':
            const numA = parseFloat(cellA.replace(/[^0-9.-]+/g, ''));
            const numB = parseFloat(cellB.replace(/[^0-9.-]+/g, ''));

            return numA - numB;
          default :
            return cellA.localeCompare(cellB);
        }
      });


      rows.forEach(row => tbody.appendChild(row));
    });
  });
});
