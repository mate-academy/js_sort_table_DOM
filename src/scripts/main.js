'use strict';

const table = document.querySelector('table');
const thead = table.querySelector('thead tr');
const tbody = table.querySelector('tbody');
const rows = tbody.querySelectorAll('tr');
const formatSalary = string => string.replace(/[$,]/g, '');

thead.addEventListener('click', even => {
  const headerIndex = Array.from(thead.children).indexOf(even.target);
  const sortRows = Array.from(rows);

  sortRows.sort((a, b) => {
    const aTextConten = a.children[headerIndex].textContent;
    const bTextConten = b.children[headerIndex].textContent;

    if (even.target.innerHTML === 'Salary') {
      return +formatSalary(aTextConten) - +formatSalary(bTextConten);
    }

    return aTextConten.localeCompare(bTextConten);
  });

  sortRows.forEach(row => {
    tbody.appendChild(row);
  });
});
