'use strict';

// write code here
document.addEventListener('DOMContentLoaded', () => {
  const table = document.querySelector('table');
  const headers = table.querySelectorAll('th');
  const tbody = table.querySelector('tbody');

  const parseSalary = (salary) => {
    return Number(salary.replace(/[^0-9.-]+/g, ''));
  };

  headers.forEach((header, index) => {
    header.addEventListener('click', () => {
      const rows = Array.from(tbody.querySelectorAll('tr'));

      const sorted = rows.sort((a, b) => {
        const cellA = a.children[index].textContent.trim();
        const cellB = b.children[index].textContent.trim();

        if (index === 2) {
          return Number(cellA) - Number(cellB);
        }

        if (index === 3) {
          return parseSalary(cellA) - parseSalary(cellB);
        }

        return cellA.localeCompare(cellB);
      });

      tbody.innerHTML = '';
      sorted.forEach((row) => tbody.appendChild(row));
    });
  });
});
