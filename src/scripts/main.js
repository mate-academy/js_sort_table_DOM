'use strict';

const COLUMNS = {
  NAME: 0,
  POSITION: 1,
  AGE: 2,
  SALARY: 3,
};

const formatSalary = (salary) => {
  return parseInt(salary.slice(1).replace(/,/g, ''));
};

function sortTable(table, column) {
  const tbody = table.querySelector('tbody');
  const rows = Array.from(tbody.rows);

  const sortFunction = (a, b) => {
    const aValue = a.cells[column].textContent;
    const bValue = b.cells[column].textContent;

    switch (column) {
      case (COLUMNS.AGE):
        return parseInt(aValue) - parseInt(bValue);
      case (COLUMNS.SALARY):
        return formatSalary(aValue) - formatSalary(bValue);
      default:
        return aValue.localeCompare(bValue);
    }
  };

  rows.sort(sortFunction);

  tbody.innerHTML = '';

  rows.forEach(row => {
    tbody.appendChild(row);
  });
}

const tableElement = document.querySelector('table');

const headers = document.querySelectorAll('thead th');

headers.forEach(header => {
  header.addEventListener('click', () => {
    const columnIndex = header.cellIndex;

    sortTable(tableElement, columnIndex);
  });
});
