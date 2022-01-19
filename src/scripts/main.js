'use strict';

const table = document.querySelector('table');
const tbody = document.querySelector('tbody');

table.addEventListener('click', (ev) => {
  const item = ev.target.closest('th');

  if (!item) {
    return;
  };

  const number = item.cellIndex;

  const sorted = [...tbody.rows].sort((a, b) => {
    const aValue = a.cells[number].innerText.replace(/[$,]/g, '');
    const bValue = b.cells[number].innerText.replace(/[$,]/g, '');

    if (!isNaN(aValue)) {
      return aValue - bValue;
    } else {
      return aValue.localeCompare(bValue);
    };
  });

  tbody.append(...sorted);
});
