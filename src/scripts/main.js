'use strict';

// write code here

const tableElement = document.querySelector('table');
const headers = tableElement.querySelectorAll('th');
const bodyTable = tableElement.querySelector('tbody');

headers.forEach((header, index) => {
  header.addEventListener('click', () => {
    const rows = Array.from(bodyTable.querySelectorAll('tr'));

    const sortRows = rows.sort((rowA, rowB) => {
      const cellA = rowA.children[index].textContent.trim();
      const cellB = rowB.children[index].textContent.trim();

      const numberA = parseNumber(cellA);
      const numberB = parseNumber(cellB);

      if (!isNaN(numberA) && !isNaN(numberB)) {
        return numberA - numberB;
      }

      return cellA.localeCompare(cellB);
    });

    bodyTable.innerHTML = '';
    sortRows.forEach((row) => bodyTable.appendChild(row));
  });
});

function parseNumber(value) {
  return parseFloat(value.replace(/[^0-9]/g, ''));
}
