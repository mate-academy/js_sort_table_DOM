'use strict';

const table = document.querySelector('table');
const tableHead = table.tHead.rows[0].cells;
const tableBody = table.tBodies[0];

function formatter(str) {
  const cleaned = str.replace(/[$,]/g, '');

  return cleaned === '' || isNaN(cleaned) ? str : Number(cleaned);
}

function compareFn(a, b) {
  if (typeof a === 'number' && typeof b === 'number') {
    return a - b;
  }

  return a.localeCompare(b);
}

[...tableHead].forEach((item, index) => {
  item.addEventListener('click', (e) => {
    e.preventDefault();

    const rows = [...tableBody.rows];

    rows.sort((rowA, rowB) => {
      const cellA = formatter(rowA.cells[index].textContent);
      const cellB = formatter(rowB.cells[index].textContent);

      return compareFn(cellA, cellB);
    });

    rows.forEach((row) => tableBody.append(row));
  });
});
