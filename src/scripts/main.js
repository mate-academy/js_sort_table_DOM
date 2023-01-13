'use strict';

const tableHead = document.querySelector('thead');
const tableBody = document.querySelector('tbody');

tableHead.addEventListener('click', (e) => {
  const item = e.target.cellIndex;

  const sorted = [...tableBody.children].sort((a, b) => {
    let prev = a.cells[item].innerText;
    let curr = b.cells[item].innerText;

    if (prev.includes('$')) {
      prev = prev.replace(/[$,]/g, '');
      curr = curr.replace(/[$,]/g, '');

      return prev - curr;
    }

    if (isFinite(prev)) {
      return prev - curr;
    }

    return prev.localeCompare(curr);
  });

  tableBody.append(...sorted);
});
