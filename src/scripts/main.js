'use strict';

const table = document.querySelector('table');
const rows = table.querySelectorAll('tbody tr');
const headers = table.querySelectorAll('thead th');

headers.forEach((element, index) => {
  element.addEventListener('click', () => {
    const getCurrectIndex = `td:nth-child(${index + 1})`;

    [...rows].sort((a, b) => {
      const nameA = a.querySelector(getCurrectIndex)
        .textContent.replace(/[$,]/g, '');
      const nameB = b.querySelector(getCurrectIndex)
        .textContent.replace(/[$,]/g, '');

      if (!isNaN(nameA)) {
        return nameA - nameB;
      } else {
        return nameA.localeCompare(nameB);
      }
    }).forEach(row => table.querySelector('tbody').appendChild(row));
  });
});
