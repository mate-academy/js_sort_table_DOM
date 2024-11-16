'use strict';

const table = document.querySelector('table');

document.addEventListener('click', (e) => {
  const target = e.target.closest('thead th');

  if (!target) {
    return;
  }
  sortTable(target);
});

function sortTable(elem) {
  const thead = [...table.rows[0].cells];
  const currentPos = thead.indexOf(elem);

  const tableBody = [...table.rows].slice(1, -1).sort((a, b) => {
    let firstValue = a.cells[currentPos].innerHTML;
    let secondValue = b.cells[currentPos].innerHTML;

    if (!isNaN(parseFloat(firstValue)) || firstValue.includes('$')) {
      if (firstValue.includes('$')) {
        firstValue = firstValue.slice(1).replace(',', '.');
        secondValue = secondValue.slice(1).replace(',', '.');
      }

      return +firstValue - +secondValue;
    }

    return firstValue > secondValue ? 1 : -1;
  });

  table.tBodies[0].append(...tableBody);
}
