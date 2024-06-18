'use strict';

const tableHeaders = document.querySelectorAll('thead tr th');
const tableBody = document.querySelector('tbody');
let isAscending = true;

tableHeaders.forEach((header, index) => {
  header.addEventListener('click', () => {
    sortField(index, isAscending);
    isAscending = !isAscending;
  });
});

const sortField = (indexOfColumn, ascending) => {
  const rows = Array.from(tableBody.querySelectorAll('tr'));

  rows.sort((a, b) => {
    const aContent = a.children[indexOfColumn].textContent;
    const bContent = b.children[indexOfColumn].textContent;

    let result = 0;

    if (!isNaN(aContent)) {
      result = parseFloat(aContent) - parseFloat(bContent);
    } else if (indexOfColumn === 3) {
      const salaryA = parseFloat(aContent.replace(/[$,]/g, ''));
      const salaryB = parseFloat(bContent.replace(/[$,]/g, ''));

      result = salaryA - salaryB;
    } else {
      result = aContent.localeCompare(bContent);
    }

    return ascending ? result : -result;
  });

  rows.forEach((row) => {
    tableBody.appendChild(row);
  });
};
