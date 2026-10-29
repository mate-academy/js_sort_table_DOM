'use strict';

const thead = document.querySelector('thead');
const tbody = document.querySelector('tbody');

function parseValue(text) {
  const cleaned = text.replace(/[$,]/g, '');

  if (cleaned !== '' && !isNaN(cleaned)) {
    return Number(cleaned);
  }

  return text;
}

function compare(a, b) {
  if (typeof a === 'number' && typeof b === 'number') {
    return a - b;
  }

  return String(a).localeCompare(String(b));
}

thead.addEventListener('click', (e) => {
  const th = e.target.closest('th');

  if (!th) {
    return;
  }

  const index = th.cellIndex;
  const rows = [...tbody.rows];

  rows.sort((rowA, rowB) => {
    const a = parseValue(rowA.cells[index].textContent);
    const b = parseValue(rowB.cells[index].textContent);

    return compare(a, b);
  });

  tbody.append(...rows);
});
