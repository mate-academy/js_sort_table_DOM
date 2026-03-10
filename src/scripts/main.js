'use strict';

const table = document.querySelector('table');
const tbody = table.querySelector('tbody');

table.querySelector('thead').addEventListener('click', (e) => {
  const target = e.target;

  if (target.tagName !== 'TH') {
    return;
  }

  const index = target.cellIndex;

  const rowsArray = Array.from(tbody.rows);

  rowsArray.sort((rowA, rowB) => {
    const contentA = rowA.cells[index].textContent.trim();
    const contentB = rowB.cells[index].textContent.trim();

    const cleanA = contentA.replace(/[$,]/g, '');
    const cleanB = contentB.replace(/[$,]/g, '');

    const isNumber = cleanA !== '' && !isNaN(cleanA) && !isNaN(cleanB);

    if (isNumber) {
      return Number(cleanA) - Number(cleanB);
    } else {
      return contentA.localeCompare(contentB);
    }
  });

  tbody.append(...rowsArray);
});
