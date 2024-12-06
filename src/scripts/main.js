'use strict';

const headers = [...document.querySelectorAll('table thead th')];
const tbody = document.querySelector('tbody');

const sortOrder = {};

headers.forEach((item, index) => {
  sortOrder[index] = true;

  item.addEventListener('click', () => {
    const isAscending = sortOrder[index];

    sortColumn(index, isAscending);
    sortOrder[index] = !sortOrder[index];
  });
});

const sortColumn = (indexOfColumn, isAscending) => {
  const rows = [...tbody.querySelectorAll('tr')];

  rows.sort((a, b) => {
    const cellA = a.children[indexOfColumn].textContent.trim();
    const cellB = b.children[indexOfColumn].textContent.trim();

    const valueA = parseFloat(cellA.replace(/[$,]/g, '')) || cellA;
    const valueB = parseFloat(cellB.replace(/[$,]/g, '')) || cellB;

    let result;

    if (!isNaN(valueA) && !isNaN(valueB)) {
      result = valueA - valueB;
    } else {
      result = valueA.localeCompare(valueB);
    }

    return isAscending ? result : -result;
  });

  rows.forEach((row) => {
    tbody.appendChild(row);
  });
};
