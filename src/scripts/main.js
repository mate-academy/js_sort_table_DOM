'use strict';

const table = document.querySelector('table');
const thead = table.querySelector('thead');

thead.addEventListener('click', e => {
  const th = e.target.closest('th');

  if (!th) {
    return;
  }

  const tbody = table.querySelector('tbody');
  const rows = [...tbody.querySelectorAll('tr')];
  const cellIndex = th.cellIndex;
  const field = th.innerText;

  rows.sort((a, b) => {
    const current = a.cells[cellIndex].innerText;
    const next = b.cells[cellIndex].innerText;

    if (field === 'Age') {
      return current - next;
    }

    if (field === 'Salary') {
      return convStrToNum(current) - convStrToNum(next);
    }

    return current.localeCompare(next);
  });

  tbody.append(...rows);
});

function convStrToNum(str) {
  return +str.replace(/[$,]/g, '');
}
