'use strict';

const columnSorters = {
  0: sortAsText,
  1: sortAsText,
  2: sortAsNumber,
  3: sortAsCurrency,
};

function sortAsText(a, b) {
  return a.trim().localeCompare(b.trim(), 'ru');
}

function sortAsNumber(a, b) {
  return parseFloat(a) - parseFloat(b);
}

function sortAsCurrency(a, b) {
  const clean = (str) => parseFloat(str.replace(/[$,\s]/g, ''));

  return clean(a) - clean(b);
}

const tableEl = document.querySelector('table');
const headerEl = tableEl.tHead;
const bodyEl = tableEl.tBodies[0];
const rows = [...bodyEl.rows];

headerEl.addEventListener('click', (e) => {
  const th = e.target.closest('th');

  if (!th) {
    return;
  }

  const columnIndex = th.cellIndex;
  const sorter = columnSorters[columnIndex] || sortAsText;

  rows.sort((rowA, rowB) => {
    const cellA = rowA.cells[columnIndex].textContent;
    const cellB = rowB.cells[columnIndex].textContent;

    return sorter(cellA, cellB);
  });

  rows.forEach((row) => bodyEl.append(row));
});
