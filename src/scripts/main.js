'use strict';

const tableHeaders = document.querySelectorAll('thead tr th');
const tableBody = document.querySelector('tbody');

const sortDirections = Array.from(tableHeaders).map(() => true);

tableHeaders.forEach((header, index) => {
  header.addEventListener('click', () => {
    sortField(index, sortDirections[index]);

    sortDirections[index] = !sortDirections[index];
  });
});

const sortField = (indexOfColumn, ascending) => {
  const rows = Array.from(tableBody.querySelectorAll('tr'));

  rows.sort((a, b) => {
    const aContent = a.children[indexOfColumn].textContent.trim();
    const bContent = b.children[indexOfColumn].textContent.trim();

    let result = 0;

    if (!isNaN(aContent) && !isNaN(bContent)) {
      result = parseFloat(aContent) - parseFloat(bContent);
    } else if (indexOfColumn === 3) {
      const salaryA = parseFloat(aContent.replace(/[$,]/g, ''));
      const salaryB = parseFloat(bContent.replace(/[$,]/g, ''));

      result = salaryA - salaryB;
    } else {
      result = aContent.localeCompare(bContent);
    }

    return result;
  });

  rows.forEach((row) => {
    tableBody.appendChild(row);
  });
};
