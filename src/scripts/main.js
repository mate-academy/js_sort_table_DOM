'use strict';

const table = document.querySelector('table');
const head = table.querySelector('thead');
const bodyTable = table.querySelector('tbody');

head.addEventListener('click', onClick);

function onClick(eve) {
  const clickedHeader = eve.target.closest('th');

  if (!clickedHeader) {
    return;
  }

  const indexTh = clickedHeader.cellIndex;

  const row = bodyTable.querySelectorAll('tr');
  const arrayRow = Array.from(row);

  arrayRow.sort((a, b) => {
    let valueA = a.cells[indexTh].textContent.trim();

    let valueB = b.cells[indexTh].textContent.trim();

    valueA = valueA.replace(/[$,]/g, '');
    valueB = valueB.replace(/[$,]/g, '');

    const numberA = Number(valueA);
    const numberB = Number(valueB);

    if (!isNaN(numberA) && !isNaN(numberB)) {
      return parseFloat(numberA) - parseFloat(numberB);
    } else {
      return valueA.localeCompare(valueB);
    }
  });

  bodyTable.append(...arrayRow);
}
