'use strict';

const thead = document.querySelector('thead');
const tbody = document.querySelector('tbody');

thead.addEventListener('click', (_event) => {
  const target = _event.target.closest('th');

  const cellIndex = target.cellIndex;

  if (!target) {
    return;
  }

  const copyOfData = [...tbody.children];

  copyOfData.sort((a, b) => {
    const cellA = a.cells[cellIndex].innerHTML;
    const cellB = b.cells[cellIndex].innerHTML;

    if (cellA.includes('$')) {
      return goodNumbers(cellB) - goodNumbers(cellA);
    }

    if (typeof cellA === 'string') {
      return cellA.localeCompare(cellB);
    }

    if (typeof cellA === 'number') {
      return cellB - cellA;
    }
  });

  tbody.append(...copyOfData);
});

function goodNumbers(numb) {
  return +numb.replace(/\D/g, '');
}
