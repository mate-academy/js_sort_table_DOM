'use strict';

const table = document.querySelector('table');
const headers = table.querySelectorAll('thead > tr > th');
const tbody = table.querySelector('tbody');
const rows = tbody.querySelectorAll('tr');

headers.forEach((header, index) => {
  header.addEventListener('click', () => {
    const sortedRows = Array.from(rows).sort((rowA, rowB) => {
      const cellA = rowA.children[index].textContent;
      const cellB = rowB.children[index].textContent;

      if (header.textContent === 'Salary') {
        const parseSalary = (salary) => parseFloat(salary.replace(/[$,]/g, ''));
        return parseSalary(cellA) - parseSalary(cellB);
      }

      if (header.textContent === 'Age') {
        return parseInt(cellA) - parseInt(cellB);
      }

      return cellA.localeCompare(cellB);
    });

    tbody.append(...sortedRows);
  });
});
