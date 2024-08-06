'use strict';

const table = document.querySelector('table');
const allTh = table.querySelectorAll('th');
const tBody = table.querySelector('tbody');

allTh.forEach((headerItem, index) => {
  headerItem.addEventListener('click', function () {
    const rows = [...tBody.rows];
    const sortedRows = rows.sort((a, b) => {
      const aText = a.cells[index].textContent.trim();
      const bText = b.cells[index].textContent.trim();

      if (aText.includes('$')) {
        const aValue = parseFloat(aText.replace(/[$,]/g, ''));
        const bValue = parseFloat(bText.replace(/[$,]/g, ''));

        return aValue - bValue;
      } else {
        return aText > bText ? 1 : aText < bText ? -1 : 0;
      }
    });

    tBody.append(...sortedRows);
  });
});
