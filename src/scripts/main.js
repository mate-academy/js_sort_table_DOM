'use strict';

document.querySelectorAll('thead th').forEach((th) => {
  th.addEventListener('click', () => {
    const cellIndex = th.cellIndex;
    const tableBody = document.querySelector('table tbody');
    const rows = Array.from(tableBody.rows);

    rows.sort((row1, row2) => {
      let val1 = row1.cells[cellIndex].textContent.trim();
      let val2 = row2.cells[cellIndex].textContent.trim();

      if (
        !isNaN(val1.replace(/[$,]/g, '')) &&
        !isNaN(val2.replace(/[$,]/g, ''))) {
        val1 = parseFloat(val1.replace(/[$,]/g, ''));
        val2 = parseFloat(val2.replace(/[$,]/g, ''));

        return val1 - val2;
      }

      return val1.localeCompare(val2);
    });

    rows.forEach((row) => tableBody.appendChild(row));
  });
});
