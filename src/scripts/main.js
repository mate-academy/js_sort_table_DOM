'use strict';

const table = document.querySelector('table');
const th = table.querySelectorAll('th');
const tBody = table.querySelector('tbody');

th.forEach((thItem) => {
  thItem.addEventListener('click', (e) => {
    const columnIn = Array.from(th).indexOf(e.target);
    const row = Array.from(tBody.querySelectorAll('tr'));
    const sortedRow = row.sort((a, b) => {
      const aText = a.cells[columnIn].textContent.trim();
      const bText = b.cells[columnIn].textContent.trim();
      const aValue = parseFloat(aText.replace(/[$,]/g, ''));
      const bValue = parseFloat(bText.replace(/[$,]/g, ''));

      if (!isNaN(aValue) && !isNaN(bValue)) {
        return aValue - bValue;
      } else {
        return aText.localeCompare(bText);
      }
    });

    tBody.append(...sortedRow);
  });
});
