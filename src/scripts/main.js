'use strict';

const table = document.querySelector('table');
const tableBody = table.tBodies[0];

const toNumber = (text) => Number(text.replace(/[$,\s]/g, ''));

const isNumeric = (text) => text.trim() !== '' && !isNaN(toNumber(text));

const getValue = (row, index) => row.cells[index].textContent;

const compareCells = (first, second) => {
  if (isNumeric(first) && isNumeric(second)) {
    return toNumber(first) - toNumber(second);
  }

  return first.localeCompare(second);
};

table.tHead.addEventListener('click', (e) => {
  const header = e.target.closest('th');

  if (!header) {
    return;
  }

  const index = header.cellIndex;
  const rows = [...tableBody.rows];

  rows.sort((first, second) => {
    const firstValue = getValue(first, index);
    const secondValue = getValue(second, index);

    return compareCells(firstValue, secondValue);
  });

  tableBody.append(...rows);
});
