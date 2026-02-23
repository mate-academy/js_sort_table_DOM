'use strict';

const headers = document.querySelector('thead');

headers.addEventListener('click', (e) => {
  const index = e.target.cellIndex;
  const tbody = document.querySelector('tbody');
  const rows = Array.from(tbody.rows);

  const resultArr = rows.sort((a, b) => {
    const valA = a.cells[index].textContent;
    const valB = b.cells[index].textContent;

    if (index === 2) {
      return valA - valB;
    }

    if (index === 3) {
      return valA.replace(/[^0-9.]/g, '') - valB.replace(/[^0-9.]/g, '');
    }

    if (index === 0 || index === 1) {
      return valA.localeCompare(valB);
    }
  });

  tbody.append(...resultArr);
});
