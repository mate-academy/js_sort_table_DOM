'use strict';

const tHead = document.body.querySelector('thead');
const tBody = document.body.querySelector('tbody');

tHead.addEventListener('click', event => {
  const target = event.target.closest('th');
  const column = target.cellIndex;
  const rows = [...tBody.children];

  rows.sort((a, b) => {
    let valueA = a.cells[column].textContent;
    let valueB = b.cells[column].textContent;

    if (!isNaN(+valueA)) {
      return +valueA - +valueB;
    } else if (valueA.startsWith('$')) {
      valueA = valueA.replace('$', '').replace(',', '.');
      valueB = valueB.replace('$', '').replace(',', '.');

      return valueA - valueB;
    }

    return valueA.localeCompare(valueB);
  });

  [...rows].forEach(row => tBody.appendChild(row));
});
