'use strict';

const table = document.querySelector('table');
const headerCells = table.querySelectorAll('thead th');

const body = document.querySelector('tbody');
const bodyRows = [...body.rows];

headerCells.forEach((header, index) => {
  header.addEventListener('click', () => {
    bodyRows.sort((rowA, rowB) => {
      const cellA = rowA.children[index].textContent.trim();
      const cellB = rowB.children[index].textContent.trim();

      if (!isNaN(cellA) && !isNaN(cellB)) {
        return cellA - cellB;
      } else if (index === 3) {
        const salaryA = parseFloat(removeDollarAndComma(cellA));
        const salaryB = parseFloat(removeDollarAndComma(cellB));

        return salaryA - salaryB;
      } else {
        return cellA.localeCompare(cellB);
      }
    });
    bodyRows.forEach((row) => body.appendChild(row));
  });
});

function removeDollarAndComma(value) {
  let result = '';

  for (let i = 0; i < value.length; i++) {
    if (value[i] !== '$' && value[i] !== ',') {
      result += value[i];
    }
  }

  return result;
}
