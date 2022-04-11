'use strict';

const table = document.querySelector('table');
const tbody = document.querySelector('tbody');

table.addEventListener('click', (ev) => {
  const item = ev.target.closest('th');

  if (!item) {
    return;
  }

  const number = item.cellIndex;

  const sortedList = [...tbody.rows].sort((first, second) => {
    const a = first.cells[number].innerText.replace(/[$,]/g, '');
    const b = second.cells[number].innerText.replace(/[$,]/g, '');

    if (!isNaN(a)) {
      return a - b;
    } else {
      return a.localeCompare(b);
    };
  });

  tbody.append(...sortedList);
});
