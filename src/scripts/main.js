'use strict';

const tableHeader = document.querySelector('thead');

tableHeader.addEventListener('click', (e) => {
  const target = e.target;

  if (target.closest('th')) {
    const cellIndex = target.closest('th').cellIndex;
    const bodyRows = Array.from(document.querySelector('tbody').rows);

    bodyRows.sort((a, b) => {
      let aCell = a.cells[cellIndex].textContent;
      let bCell = b.cells[cellIndex].textContent;

      if (cellIndex === 3) {
        aCell = aCell.replace('$', '');
        aCell = aCell.replaceAll(',', '');
        bCell = bCell.replace('$', '');
        bCell = bCell.replaceAll(',', '');
      }

      return !isNaN(aCell) && !isNaN(bCell)
        ? Number(aCell) - Number(bCell)
        : aCell.localeCompare(bCell);
    });

    document.querySelector('tbody').append(...bodyRows);
  }
});
