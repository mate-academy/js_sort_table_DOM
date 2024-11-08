'use strict';

const tbody = document.querySelector('tbody');
const thead = document.querySelector('thead');
const rowArray = [...tbody.rows];

const getSellValue = (tr, i) => {
  return tr.children[i].innerText;
};

thead.addEventListener('click', (e) => {
  const th = e.target;
  const idx = th.cellIndex;

  rowArray.sort((rowA, rowB) => {
    const cellA = getSellValue(rowA, idx);
    const cellB = getSellValue(rowB, idx);

    const a = isNaN(cellA) ? cellA : parseFloat(cellA.replace(/[^0-9.]/g, ''));

    const b = isNaN(cellB) ? cellB : parseFloat(cellB.replace(/[^0-9.]/g, ''));

    if (!isNaN(a) && !isNaN(b)) {
      return a - b;
    } else {
      return cellA.localeCompare(cellB);
    }
  });

  tbody.append(...rowArray);
});
