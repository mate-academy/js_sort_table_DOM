'use strict';

const table = document.querySelector('table');

table.querySelectorAll('thead th').forEach((th, index) => {
  th.addEventListener('click', () => {
    sortColumn(index);
  });
});

function comparable(el, index, isNumeric) {
  const value = el.cells[index].textContent.replace(/[$,]/g, '');

  return isNumeric ? +value : value;
}

function sortColumn(index) {
  const rows = [...table.querySelectorAll('tbody tr')];
  const isNumeric = !isNaN(comparable(rows[0], index, true));

  rows.sort((a, b) => {
    const aValue = comparable(a, index, isNumeric);
    const bValue = comparable(b, index, isNumeric);

    return isNumeric ? aValue - bValue : aValue.localeCompare(bValue);
  });

  rows.forEach(row => {
    table.querySelector('tbody').append(row);
  });
}
