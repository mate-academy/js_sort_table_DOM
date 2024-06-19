'use strict';

const headers = [...document.querySelectorAll('table thead th')];
const tbody = document.querySelector('tbody');
let isAscending = true;

headers.forEach((item, index) => {
  item.addEventListener('click', () => {
    sortColomn(index);
    isAscending = !isAscending;
  });
});

const sortColomn = (indexOfColomn) => {
  const rows = [...tbody.querySelectorAll('tr')];

  rows.sort((a, b) => {
    const cellA = a.children[indexOfColomn].textContent.trim();
    const cellB = b.children[indexOfColomn].textContent.trim();

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
