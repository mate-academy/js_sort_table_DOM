'use strict';

const thead = document.querySelector('thead');
const tbody = document.querySelector('tbody');
const rows = [...tbody.rows];

thead.addEventListener('click', eventClick => {
  const th = eventClick.target.closest('th');

  sortTable(th.cellIndex, th.innerText);
});

function sortTable(index, text) {
  switch (text) {
    case 'Name':
    case 'Position':
      rows.sort((a, b) =>
        a.cells[index]
          .innerText
          .localeCompare(b.cells[index].innerText));

      break;

    case 'Age':
      rows.sort((a, b) =>
        a.cells[index].innerText - b.cells[index].innerText);

      break;

    case 'Salary':
      rows.sort((a, b) =>
        normalizeNumber(a.cells[index].innerText)
        - normalizeNumber(b.cells[index].innerText));

      break;
  }

  tbody.append(...rows);

  function normalizeNumber(string) {
    return +string.slice(1).split(',').join('');
  }
}
