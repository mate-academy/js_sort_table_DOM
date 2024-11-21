'use strict';

const table = document.querySelector('table');
const tbody = table.querySelector('tbody');

const sortOrder = {};

const sortTable = (columnIndex, sortBy) => {
  const rows = [...tbody.querySelectorAll('tr')];

  rows.sort((row1, row2) => {
    const value1 = row1.children[columnIndex].textContent;
    const value2 = row2.children[columnIndex].textContent;

    switch (sortBy) {
      case 'Name':
      case 'Position':
        return value1.localeCompare(value2) * sortOrder[columnIndex];

      case 'Age':
        return (value1 - value2) * sortOrder[columnIndex];

      case 'Salary':
        const salary1 = parseFloat(value1.replace(/[$,]/g, ''));
        const salary2 = parseFloat(value2.replace(/[$,]/g, ''));

        return (salary1 - salary2) * sortOrder[columnIndex];

      default:
        return 0;
    }
  });

  rows.forEach((row) => tbody.appendChild(row));
};

table.querySelectorAll('th').forEach((th, index) => {
  th.addEventListener('click', () => {
    const sortBy = th.textContent;

    sortOrder[index] = sortOrder[index] === 1 ? -1 : 1;
    sortTable(index, sortBy);
  });
});
