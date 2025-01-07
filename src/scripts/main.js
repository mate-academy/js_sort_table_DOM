'use strict';

// write code here
const headLines = document.querySelectorAll('th');
const tableBody = document.querySelector('tbody');
const rows = Array.from(tableBody.querySelectorAll('tr'));

const sortOrder = Array(headLines.length).fill(true);

headLines.forEach((headLine, index) => {
  headLine.addEventListener('click', () => {
    const isNumericColumn = index === 2 || index === 3;
    const isSalaryColumn = index === 3;

    const currentOrder = sortOrder[index];

    sortOrder[index] = !currentOrder;

    const sortedRows = rows.sort((rowA, rowB) => {
      const cellA = rowA.children[index].textContent.trim();
      const cellB = rowB.children[index].textContent.trim();

      if (isSalaryColumn) {
        const numA = parseInt(cellA.replace(/[$,]/g, ''));
        const numB = parseInt(cellB.replace(/[$,]/g, ''));

        return currentOrder ? numA - numB : numB - numA;
      } else if (isNumericColumn) {
        const numA = parseInt(cellA, 10);
        const numB = parseInt(cellB, 10);

        return currentOrder ? numA - numB : numB - numA;
      } else {
        return currentOrder
          ? cellA.localeCompare(cellB)
          : cellB.localeCompare(cellA);
      }
    });

    tableBody.innerHTML = '';
    tableBody.append(...sortedRows);
  });
});
