'use strict';

const parseCurrency = (value) => {
  return parseFloat(value.replace(/[^0-9.-]+/g, '')) || 0;
};

const sortTable = (columnIndex, isNumeric) => {
  const table = document.querySelector('table');
  const tbody = table.querySelector('tbody');
  const rows = Array.from(tbody.querySelectorAll('tr'));

  rows.sort((rowA, rowB) => {
    const cellA = rowA.children[columnIndex].textContent.trim();
    const cellB = rowB.children[columnIndex].textContent.trim();

    if (isNumeric) {
      return parseCurrency(cellA) - parseCurrency(cellB);
    } else {
      return cellA.localeCompare(cellB);
    }
  });

  rows.forEach((row) => tbody.appendChild(row));
};

const ths = document.querySelectorAll('thead th');

ths.forEach((th, index) => {
  th.addEventListener('click', () => {
    const isNumeric =
      th.textContent.trim() === 'Salary' || th.textContent.trim() === 'Age';

    sortTable(index, isNumeric);
  });
});
