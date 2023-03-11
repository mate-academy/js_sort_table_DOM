'use strict';

const tbody = document.querySelector('tbody');
const rows = [...tbody.rows];

document.querySelector('thead').addEventListener('click', eventClick => {
  const th = eventClick.target.closest('th');

  sortTable(th.cellIndex, th.textContent);
});

function sortTable(index, text) {
  switch (text) {
    case 'Name':
    case 'Position':
      rows.sort((a, b) =>
        a.cells[index].textContent.localeCompare(b.cells[index].textContent));
      break;
    case 'Age':
      rows.sort((a, b) =>
        a.cells[index].textContent - b.cells[index].textContent);
      break;
    case 'Salary':
      rows.sort((a, b) =>
        normalizeNumber(a.cells[index].textContent)
        - normalizeNumber(b.cells[index].textContent));
      break;
  }

  tbody.append(...rows);

  function normalizeNumber(string) {
    return +string.slice(1).replace(/,/g, '');
  }
}
