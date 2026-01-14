'use strict';

const table = document.querySelector('table');
const getPrice = (v) => +v.replace(/[^0-9]/g, '');

table.querySelector('thead').addEventListener('click', (e) => {
  if (e.target.tagName !== 'TH') {
    return;
  }

  const index = e.target.cellIndex;
  const tbody = table.querySelector('tbody');
  const rows = [...tbody.rows];

  if (rows.length === 0) {
    return;
  }

  const firstValue = rows[0].cells[index].innerText;
  const isNumeric =
    !isNaN(firstValue) || rows[0].cells[index].innerText.startsWith('$');

  rows.sort((a, b) => {
    const A = a.cells[index].innerText;
    const B = b.cells[index].innerText;

    if (isNumeric) {
      return getPrice(A) - getPrice(B);
    }

    return A.localeCompare(B);
  });

  tbody.append(...rows);
});
