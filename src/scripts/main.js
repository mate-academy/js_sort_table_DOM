'use strict';

const getCellValue = (row, index) => row.children[index].innerText.trim();

const parseSalary = (value) => Number(value.replace(/\$|,/g, ''));

const sortRows = (rows, columnIndex) => {
  return [...rows].sort((rowA, rowB) => {
    const valueA = getCellValue(rowA, columnIndex);
    const valueB = getCellValue(rowB, columnIndex);

    if (columnIndex === 2) {
      return Number(valueA) - Number(valueB);
    }

    if (columnIndex === 3) {
      return parseSalary(valueA) - parseSalary(valueB);
    }

    return valueA.localeCompare(valueB, undefined, {
      numeric: true,
      sensitivity: 'base',
    });
  });
};

const handleHeaderClick = (evt) => {
  const th = evt.target.closest('th');

  if (!th) {
    return;
  }

  const table = th.closest('table');
  const tbody = table.querySelector('tbody');
  const columnIndex = th.cellIndex;
  const rows = tbody.querySelectorAll('tr');
  const sortedRows = sortRows(rows, columnIndex);

  tbody.append(...sortedRows);
};

window.addEventListener('DOMContentLoaded', () => {
  const table = document.querySelector('table');
  const headers = table.querySelectorAll('thead th');

  headers.forEach((header) => {
    header.addEventListener('click', handleHeaderClick);
  });
});
