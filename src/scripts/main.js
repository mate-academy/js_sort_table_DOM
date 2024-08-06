'use strict';

const table = document.querySelector('table');
const allTh = table.querySelectorAll('th');
const tBody = table.querySelector('tbody');

allTh.forEach((headerItem, index) => {
  headerItem.addEventListener('click', function () {
    const allRows = [...tBody.rows];
    const sortedRows = allRows.sort((a, b) => {
      const aValueText = a.cells[index].textContent.trim();
      const bValueText = b.cells[index].textContent.trim();

      if (aValueText.includes('$')) {
        const aValueNumber = parseFloat(aValueText.replace(/[$,]/g, ''));
        const bValueNumber = parseFloat(bValueText.replace(/[$,]/g, ''));

        return aValueNumber - bValueNumber;
      } else {
        return aValueText > bValueText ? 1 : aValueText < bValueText ? -1 : 0;
      }
    });

    tBody.append(...sortedRows);
  });
});
