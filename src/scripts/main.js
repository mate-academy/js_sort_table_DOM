'use strict';

const table = document.querySelector('table');

const th = table.querySelectorAll('th');

const tbody = table.querySelector('tbody');

th.forEach((thItem) => {
  thItem.addEventListener('click', (e) => {
    const columnIndex = Array.from(th).indexOf(e.target);
    const rows = Array.from(tbody.querySelectorAll('tr'));
    const sortedRows = rows.sort((a, b) => {
      const aText = a.cells[columnIndex].textContent.trim();
      const bText = b.cells[columnIndex].textContent.trim();
      const aValue = parseFloat(aText.replace(/[$,]/g, ''));
      const bValue = parseFloat(bText.replace(/[$,]/g, ''));

      if (!isNaN(aValue) && !isNaN(bValue)) {
        return aValue - bValue;
      } else {
        return aText.localeCompare(bText);
      }
    });

    tbody.append(...sortedRows);
  });
});
