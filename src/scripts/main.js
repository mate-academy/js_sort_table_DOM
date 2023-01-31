'use strict';

// write code here
const table = document.querySelector('table');
const tbody = document.querySelector('tbody');
const tr = tbody.querySelectorAll('tr');
const row = [...tr];

table.addEventListener('click', (e) => {
  const th = e.target.closest('th');

  if (!th || !table.contains(th)) {
    return;
  }

  sortTable(th.cellIndex, th.innerHTML);
});

function sortTable(index, text) {
  switch (text) {
    case 'Name':
    case 'Position':
      row.sort((a, b) =>
        a.cells[index].innerHTML.localeCompare(b.cells[index].innerHTML));
      break;

    case 'Age':
      row.sort((a, b) =>
        a.cells[index].innerHTML - b.cells[index].innerHTML);
      break;

    case 'Salary':
      row.sort((a, b) =>
        normalizeNumber(a.cells[index].innerHTML)
          - normalizeNumber(b.cells[index].innerHTML));
      break;

    default:
      return;
  }

  tbody.append(...row);
}

function normalizeNumber(number) {
  return +number.slice(1).split(',').join('');
}
