'use strict';

const table = document.querySelector('table');
const tableHead = table.querySelector('thead');
const tableBody = table.querySelector('tbody');

tableHead.addEventListener('click', (e) => {
  const header = e.target.closest('th');

  if (!header) {
    return;
  }

  const columnIndex = Array.from(header.parentElement.children).indexOf(header);

  const rows = Array.from(tableBody.querySelectorAll('tr'));

  rows.sort((rowA, rowB) => {
    const valueA = rowA.children[columnIndex].textContent.trim();
    const valueB = rowB.children[columnIndex].textContent.trim();

    const numberA = Number(valueA.replace(/[$,]/g, ''));
    const numberB = Number(valueB.replace(/[$,]/g, ''));

    if (!Number.isNaN(numberA) && !Number.isNaN(numberB)) {
      return numberA - numberB;
    }

    return valueA.localeCompare(valueB);
  });

  rows.forEach((row) => {
    tableBody.appendChild(row);
  });
});
