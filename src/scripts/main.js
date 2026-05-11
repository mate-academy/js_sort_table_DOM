'use strict';

// write code here
const tHeader = document.querySelector('thead');
const tBody = document.querySelector('tbody');

tHeader.addEventListener('click', (eve) => {
  const columnIndex = eve.target.cellIndex;
  const rows = [...tBody.rows];
  const sortTr = rows.sort((a, b) => {
    const aValue = a.cells[columnIndex].textContent;
    const bValue = b.cells[columnIndex].textContent;

    const aNum = Number(aValue.replace(/[$,]/g, ''));
    const bNum = Number(bValue.replace(/[$,]/g, ''));

    if (!isNaN(aNum) && !isNaN(bNum)) {
      return aNum - bNum;
    }

    return aValue.localeCompare(bValue);
  });

  tBody.append(...sortTr);
});
