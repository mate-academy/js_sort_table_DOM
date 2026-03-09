'use strict';

const table = document.querySelector('table');
const tbody = table.querySelector('tbody');

table.addEventListener('click', (e) => {
  if (e.target.tagName !== 'TH') {
    return;
  }

  const th = e.target;
  const index = th.cellIndex;
  const type = th.textContent.toLowerCase().trim();

  const rowsArray = Array.from(tbody.rows);

  rowsArray.sort((rowA, rowB) => {
    const cellA = rowA.cells[index].textContent.trim();
    const cellB = rowB.cells[index].textContent.trim();

    if (type === 'age') {
      return Number(cellA) - Number(cellB);
    }

    if (type === 'salary') {
      const cleanA = parseFloat(cellA.replace(/[^0-9.-]+/g, ''));
      const cleanB = parseFloat(cellB.replace(/[^0-9.-]+/g, ''));

      return cleanA - cleanB;
    }

    return cellA.localeCompare(cellB);
  });

  tbody.append(...rowsArray);
});
