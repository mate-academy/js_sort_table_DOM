'use strict';

function convertToNum(currencyStr) {
  return Number(currencyStr.replace('$', '').replace(',', ''));
}

function sort(ev) {
  const th = ev.target.closest('th');

  if (!th) {
    return;
  }

  const table = document.querySelector('table');
  const tBody = table.tBodies[0];
  const i = th.cellIndex;

  const rows = [...table.tBodies[0].rows];

  const sortedRows = rows.sort((a, b) => {
    const a1 = a.cells[i].textContent.trim();
    const b1 = b.cells[i].textContent.trim();

    if (!isNaN(convertToNum(a1)) && !isNaN(convertToNum(b1))) {
      return convertToNum(a1) - convertToNum(b1);
    }

    return a1.localeCompare(b1);
  });

  tBody.innerHTML = '';
  tBody.append(...sortedRows);
}
document.querySelector('thead').addEventListener('click', sort);
