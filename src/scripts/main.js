'use strict';

document.addEventListener('DOMContentLoaded', sort);

function sort() {
  const table = document.querySelector('table');

  if (!table) {
    return;
  }

  const tHeader = table.tHead;
  const tBody = table.tBodies[0];

  if (!tHeader || !tBody) {
    return;
  }

  tHeader.addEventListener('click', (e) => {
    const chosenHeader = e.target.closest('th');

    if (!chosenHeader) {
      return;
    }

    const allHeaders = tHeader.querySelectorAll('th');

    const index = [...allHeaders].indexOf(chosenHeader);
    const allRows = tBody.rows;

    const rows = [...allRows].sort((a, b) => {
      const cellA = a.cells[index].textContent.trim();
      const cellB = b.cells[index].textContent.trim();

      const numA = cellA.replace(/[^0-9.-]/g, '');
      const numB = cellB.replace(/[^0-9.-]/g, '');

      if (numA !== '' && numB !== '') {
        return Number(numA) - Number(numB);
      }

      return cellA.localeCompare(cellB);
    });

    rows.forEach((row) => tBody.append(row));
  });
}
