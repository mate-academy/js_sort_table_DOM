'use strict';

const thead = document.querySelector('thead');
const tbody = document.querySelector('tbody');
const rows = [...tbody.rows];

thead.addEventListener('click', e => {
  const index = e.target.closest('th').cellIndex;

  rows.sort((a, b) => {
    const itemA = a.cells[index].innerText.replace(/[$,]/g, '');
    const itemB = b.cells[index].innerText.replace(/[$,]/g, '');

    if (isNaN(itemA)) {
      return itemA.localeCompare(itemB);
    }

    return itemA - itemB;
  });

  tbody.append(...rows);
});
