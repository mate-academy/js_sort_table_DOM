'use strict';

const table = document.querySelector('table');
const thead = table.querySelector('thead tr');
const tbody = table.querySelector('tbody');
const rows = tbody.querySelectorAll('tr');
const number = string => string.replace(/[$,]/g, '');

thead.addEventListener('click', even => {
  const headerIndex = Array.from(thead.children).indexOf(even.target);

  if (even.target.innerHTML === 'Salary') {
    Array.from(rows)
      .sort((a, b) => {
        const aValue = number(a.children[headerIndex].textContent);
        const bValue = number(b.children[headerIndex].textContent);

        return aValue - bValue;
      }).forEach(row => {
        tbody.appendChild(row);
      });
  }

  Array.from(rows)
    .sort((a, b) => {
      const aValue = a.children[headerIndex].textContent;
      const bValue = b.children[headerIndex].textContent;

      return aValue.localeCompare(bValue);
    }).forEach(row => {
      tbody.appendChild(row);
    });
});
