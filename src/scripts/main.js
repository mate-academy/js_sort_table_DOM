'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const table = document.querySelector('table');
  const tHead = table.tHead;
  const tBody = table.tBodies[0];

  tHead.addEventListener('click', (e) => {
    const rows = [...tBody.rows];
    const th = e.target.closest('th');

    if (!th) {
      return;
    }

    const thIndex = th.cellIndex;

    rows.sort((firstRow, secondRow) => {
      const firstText = firstRow.cells[thIndex].textContent;
      const secondText = secondRow.cells[thIndex].textContent;

      const firstNum = parseFloat(firstText.replace(/[^0-9.-]/g, ''));
      const secondNum = parseFloat(secondText.replace(/[^0-9.-]/g, ''));

      if (isNaN(firstNum) && isNaN(secondNum)) {
        return firstText.localeCompare(secondText);
      }

      return firstNum - secondNum;
    });

    tBody.append(...rows);
  });
});
