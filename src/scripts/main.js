'use strict';

const table = document.querySelector('table');
const headers = table.querySelectorAll('th');

headers.forEach((header) => {
  header.addEventListener('click', (e) => {
    const index = [...headers].indexOf(e.currentTarget);
    const rows = Array.from(table.tBodies[0].rows);

    rows.sort((a, b) => {
      const valA = a.cells[index].textContent.trim();
      const valB = b.cells[index].textContent.trim();

      if (!isNaN(valA) && !isNaN(valB)) {
        return Number(valA) - Number(valB);
      } else {
        return valA.localeCompare(valB, 'uk', { numeric: true });
      }
    });

    rows.forEach((row) => {
      table.tBodies[0].appendChild(row);
    });
  });
});
