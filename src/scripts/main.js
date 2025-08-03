'use strict';

// write code here
const title = document.querySelector('table');
const allTitle = title.querySelectorAll('thead th');

allTitle.forEach((e, index) => {
  e.addEventListener('click', () => {
    const tbody = title.querySelector('tbody');
    const rows = Array.from(title.querySelectorAll('tr'));
    const sortRows = rows.sort((aRow, bRow) => {
      const aCel = aRow.cells[index].textContent.trim();
      const bCel = bRow.cells[index].textContent.trim();
      const clearA = aCel.replace(/[$,\s]/g, '');
      const clearB = bCel.replace(/[$,\s]/g, '');

      const thisNumber = !isNaN(clearA) && !isNaN(clearB);

      if (thisNumber) {
        return clearA - clearB;
      } else {
        return aCel.localeCompare(bCel);
      }
    });

    tbody.innerHTML = '';
    sortRows.forEach((row) => tbody.appendChild(row));
  });
});
