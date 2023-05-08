'use strict';

const table = document.querySelector('table');
const thead = table.tHead;

thead.addEventListener('click', function(e) {
  if (!e.target.tagName === 'TH') {
    return;
  }

  const targetIndex = e.target.cellIndex;
  const tBody = table.tBodies[0];

  const bodyRowsArray = [...tBody.rows];

  bodyRowsArray.sort((rowA, rowB) => rowA.cells[targetIndex].innerHTML
    .localeCompare(rowB.cells[targetIndex].innerHTML));

  if (e.target.textContent === 'Salary') {
    bodyRowsArray.sort((rowA, rowB) => normalizeNum(
      rowA.cells[targetIndex].innerHTML) - normalizeNum(
      rowB.cells[targetIndex].innerHTML));
  }

  tBody.append(...bodyRowsArray);
});

function normalizeNum(number) {
  return number.split(',').join('').slice(1);
}
