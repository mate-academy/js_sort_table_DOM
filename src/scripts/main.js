'use strict';

const table = document.querySelector('table');

table.addEventListener('click', e => {
  const th = e.target.closest('th');

  if (!th || !table.contains(th)) {
    return;
  }

  sortTable(th.cellIndex, th.innerHTML);
});

function sortTable(index, text) {
  const tbody = document.querySelector('tbody');
  const row = [...tbody.children];

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
        normalNumber(a.cells[index].innerHTML)
          - normalNumber(b.cells[index].innerHTML));
      break;
  }

  tbody.append(...row);
}

function normalNumber(number) {
  return +number.slice(1).split(',').join('');
}
