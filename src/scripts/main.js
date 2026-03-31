'use strict';

const table = document.querySelector('table');

const salary = (salaries) => Number(salaries.replace(/[$\s,]/g, ''));

table.addEventListener('click', function (e) {
  if (e.target.tagName !== 'TH') {
    return;
  }

  const closestTh = e.target.closest('th');

  if (!closestTh) {
    return;
  }

  const cellIndex = closestTh.cellIndex;
  const tbodyTr = table.querySelectorAll('tbody tr');

  const tr = Array.from(tbodyTr);

  const sortTr = tr.sort((rowA, rowB) => {
    const textA = rowA.cells[cellIndex].textContent.trim();
    const textB = rowB.cells[cellIndex].textContent.trim();

    const numA = salary(textA);
    const numB = salary(textB);

    if (!isNaN(numA) && !isNaN(numB)) {
      return numA - numB;
    }

    return textA.localeCompare(textB);
  });

  table.tBodies[0].append(...sortTr);
});
