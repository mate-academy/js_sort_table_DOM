'use strict';

const table = document.querySelector('table');
const tBody = table.querySelector('tbody');
const tHead = table.querySelector('thead');
const tRowHeaders = tHead.firstElementChild.cells;

[...tRowHeaders].forEach((header, index) => {
  header.addEventListener('click', () => {
    sortRows(index);
  });
});

function sortRows(colIndex) {
  const rows = [...tBody.rows];

  rows.sort((a, b) => {
    const aText = a.cells[colIndex].textContent.trim();
    const bText = b.cells[colIndex].textContent.trim();

    const aNum = parseFloat(aText);
    const bNum = parseFloat(bText);

    if (!isNaN(aNum) && !isNaN(bNum)) {
      return aNum - bNum;
    }

    return aText.localeCompare(bText);
  });

  rows.forEach((row) => tBody.appendChild(row));
}
