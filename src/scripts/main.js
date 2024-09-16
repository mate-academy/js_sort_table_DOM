'use strict';

const headers = document.querySelectorAll('th');

headers.forEach((header, index) => {
  header.addEventListener('click', () => {
    sortTable(index);
  });
});

function sortTable(index) {
  const table = document.querySelector('table');
  const rows = Array.from(table.rows).slice(1);
  let isNumeric = !isNaN(rows[0].cells[index].textContent);
  const isSalary = index === 3;

  rows.sort((rowA, rowB) => {
    let cellA = rowA.cells[index].textContent;
    let cellB = rowB.cells[index].textContent;

    if (isSalary) {
      cellA = parseFloat(cellA.replace(/[$,]/g, ''));
      cellB = parseFloat(cellB.replace(/[$,]/g, ''));
      isNumeric = true;
    }

    if (isNumeric) {
      return cellA - cellB;
    } else {
      return cellA.localeCompare(cellB);
    }
  });

  rows.forEach((row) => table.appendChild(row));
}
