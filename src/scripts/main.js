'use strict';

const HEAD_ITEMS = {
  name: 'name',
  position: 'position',
  age: 'age',
  salary: 'salary',
};
const HEAD_CONFIG = [
  HEAD_ITEMS.name,
  HEAD_ITEMS.position,
  HEAD_ITEMS.age,
  HEAD_ITEMS.salary,
];

const tHead = document.querySelector('thead');
const [tHeadRow] = tHead.rows;
const tHeadCells = tHeadRow.cells;

const tBody = document.querySelector('tbody');
const tBodyRows = tBody.rows;

function extractValue(value, columnIdx) {
  let extractedValue = value.cells[columnIdx].textContent;

  if (HEAD_CONFIG[columnIdx] === HEAD_ITEMS.age) {
    extractedValue = Number(extractedValue);
  }

  if (HEAD_CONFIG[columnIdx] === HEAD_ITEMS.salary) {
    extractedValue = Number(extractedValue.replace(/[$,]/g, ''));
  }

  return extractedValue;
}

function onSort(e) {
  const columnIdx = [...tHeadCells].indexOf(e.target);

  const sortedArray = [...tBodyRows].sort((a, b) => {
    const valueA = extractValue(a, columnIdx);
    const valueB = extractValue(b, columnIdx);

    if (valueA < valueB) {
      return -1;
    }

    return 1;
  });

  sortedArray.forEach((el) => {
    tBody.append(el);
  });
}

tHead.addEventListener('click', (e) => onSort(e, tHead));
