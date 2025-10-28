'use strict';

const table = document.querySelector('table');

document.addEventListener('click', (e) => {
  const headers = [...table.querySelectorAll('th')];
  const clickedTh = e.target.closest('th');

  if (!clickedTh) {
    return;
  }

  const index = headers.indexOf(clickedTh);
  const rows = [...table.tBodies[0].rows];

  rows.sort((curr, next) => {
    const a = parseFloat(
      curr.cells[index].textContent.trim().replace(/[^0-9.-]+/g, ''),
    );
    const b = parseFloat(
      next.cells[index].textContent.trim().replace(/[^0-9.-]+/g, ''),
    );

    if (Number.isNaN(a) && Number.isNaN(b)) {
      return curr.cells[index].textContent
        .trim()
        .localeCompare(next.cells[index].textContent.trim());
    } else {
      return a - b;
    }
  });

  rows.forEach((row) => table.tBodies[0].appendChild(row));
});
