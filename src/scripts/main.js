'use strict';

const tHead = document.querySelector('thead');
const tBody = document.querySelector('tbody');
let asc = true;
let checkColumn;

function ascSort(rowCollection, targetIndex) {
  asc = true;

  return Array.from(rowCollection).sort((a, b) => {
    const cellA = a.cells[targetIndex].innerText;
    const cellB = b.cells[targetIndex].innerText;

    return isNaN(normalize(cellA))
      ? cellA.localeCompare(cellB)
      : normalize(cellA) - normalize(cellB);
  });
}

function descSort(rowCollection, targetIndex) {
  asc = false;

  return Array.from(rowCollection).sort((a, b) => {
    const cellA = a.cells[targetIndex].innerText;
    const cellB = b.cells[targetIndex].innerText;

    return isNaN(normalize(cellA))
      ? cellB.localeCompare(cellA)
      : normalize(cellB) - normalize(cellA);
  });
}

function normalize(str) {
  return +str.replace(/[,$]/g, '');
}

function appendElement(table, el) {
  table.append(el);
}

tHead.addEventListener('click', (evt) => {
  const title = evt.target;
  const idx = title.cellIndex;

  if (checkColumn === idx && asc) {
    return descSort(tBody.rows, idx).forEach(rowEl => {
      appendElement(tBody, rowEl);
    });
  }

  return ascSort(tBody.rows, idx).forEach(rowEl => {
    appendElement(tBody, rowEl);
    checkColumn = idx;
  });
});
