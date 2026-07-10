'use strict';

const table = document.querySelector('thead tr');
const tbody = document.querySelector('tbody');

table.addEventListener('click', (e) => {
  if (e.target.tagName !== 'TH') {
    return;
  }

  const rows = [...document.querySelectorAll('tbody tr')];
  const index = e.target.cellIndex;

  rows.sort((a, b) => {
    const first = a.cells[index].textContent;
    const second = b.cells[index].textContent;

    const fn = first.replace('$', '').replaceAll(',', '');
    const sn = second.replace('$', '').replaceAll(',', '');

    if (!isNaN(fn) && !isNaN(sn)) {
      return Number(fn) - Number(sn);
    }

    return first.localeCompare(second);
  });

  tbody.append(...rows);
});
