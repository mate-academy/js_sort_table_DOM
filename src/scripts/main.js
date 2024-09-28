'use strict';

const table = document.querySelector('table');
const tableBody = document.querySelector('tbody');

table.addEventListener('click', e => {
  const item = e.target.closest('th');
  const index = item.cellIndex;

  const sortedArray = [...tableBody.rows].sort((a, b) => {
    const aValue = a.cells[index].innerText.replace(/[$,]/g, '');
    const bValue = b.cells[index].innerText.replace(/[$,]/g, '');

    if (isNaN(aValue)) {
      return aValue.localeCompare(bValue);
    } else {
      return aValue - bValue;
    };
  });

  tableBody.append(...sortedArray);
});
