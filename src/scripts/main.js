'use strict';

// write code here
const thead = document.querySelector('thead');
const tbody = document.querySelector('tbody');

thead.addEventListener('click', (e) => {
  const th = e.target.closest('th');

  if (!th) {
    return;
  }

  const index = th.cellIndex;

  const rows = tbody.querySelectorAll('tr');
  const rowsArray = Array.from(rows);

  rowsArray.sort((rowA, rowB) => {
    const cellA = rowA.cells[index].textContent;
    const cellB = rowB.cells[index].textContent;

    const cleanA = cellA.replace(/[^\d.-]/g, '');
    const cleanB = cellB.replace(/[^\d.-]/g, '');

    if (cleanA !== '' && cleanB !== '' && !isNaN(cleanA) && !isNaN(cleanB)) {
      return Number(cleanA) - Number(cleanB);
    }

    return cellA.localeCompare(cellB);
  });

  tbody.append(...rowsArray);
});
