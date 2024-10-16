'use strict';

const table = document.querySelector('table');

table.tHead.addEventListener('click', (e) => {
  const target = e.target.closest('th');

  if (!target) {
    return;
  }

  const index = target.cellIndex;
  const title = target.textContent;
  const tBody = table.tBodies[0];
  const rowsArray = Array.from(tBody.rows);

  rowsArray.sort((rowA, rowB) => {
    let valueA = rowA.cells[index].textContent;
    let valueB = rowB.cells[index].textContent;

    if (title === 'Age') {
      return +valueA - +valueB;
    }

    if (title === 'Salary') {
      valueA = parseFloat(valueA.replace(/[$,]/g, ''));
      valueB = parseFloat(valueB.replace(/[$,]/g, ''));

      return valueA - valueB;
    }

    return valueA.localeCompare(valueB);
  });

  rowsArray.forEach((row) => tBody.append(row));
});
