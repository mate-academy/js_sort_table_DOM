'use strict';

const table = document.querySelector('table');
const tBody = document.querySelector('tbody');

table.addEventListener('click', element => {
  const item = element.target.closest('th');
  const index = item.cellIndex;

  const sorted = [...tBody.rows].sort((a, b) => {
    const aValue = a.cells[index].innerText.replace(/[$,]/g, '');
    const bValue = b.cells[index].innerText.replace(/[$,]/g, '');

    if (isNaN(aValue)) {
      return aValue.localeCompare(bValue);
    } else {
      return aValue - bValue;
    };
  });

  tBody.append(...sorted);
});
