'use strict';

const table = document.querySelector('table');

table.tHead.addEventListener('click', (e) => {
  const headerColumn = e.target.closest('th').cellIndex;
  const rows = Array.from(table.tBodies[0].rows);
  const newBody = document.createElement('tbody');

  rows.sort((rowA, rowB) => {
    const cellA = rowA.cells[headerColumn].textContent.replaceAll(
      /[^0-9a-zA-Z]/g,
      '',
    );

    const cellB = rowB.cells[headerColumn].textContent.replaceAll(
      /[^0-9a-zA-Z]/g,
      '',
    );

    if (!isNaN(cellA) && !isNaN(cellB)) {
      return Number(cellA) - Number(cellB);
    }

    if (isNaN(cellA)) {
      return String(cellA).localeCompare(String(cellB));
    }
  });

  rows.forEach((row) => {
    newBody.appendChild(row);
  });

  table.tBodies[0].replaceWith(newBody);
});

// write code here
