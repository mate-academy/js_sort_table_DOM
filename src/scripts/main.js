'use strict';

const table = document.querySelector('table');
const mainRow = table.rows[0];
const dataRows = Array.from(table.rows).slice(1, 13);

function compareValues(a, b, columnIndex) {
  let aNum, bNum;

  if (columnIndex === 2) {
    aNum = parseFloat(a);
    bNum = parseFloat(b);
  } else if (columnIndex === 3) {
    aNum = a.slice(1).replace(',', '');
    bNum = b.slice(1).replace(',', '');
  }

  if (!isNaN(aNum) && !isNaN(bNum)) {
    return aNum - bNum;
  } else {
    return a.localeCompare(b);
  }
}

mainRow.addEventListener('click', (e) => {
  const clickedCell = e.target.closest('th');

  if (clickedCell) {
    const columnIndex = clickedCell.cellIndex;

    dataRows.sort((a, b) => {
      const aValue = a.cells[columnIndex].textContent.trim();
      const bValue = b.cells[columnIndex].textContent.trim();

      return compareValues(aValue, bValue, columnIndex);
    });

    dataRows.forEach((row) => table.tBodies[0].appendChild(row));
  }
});
