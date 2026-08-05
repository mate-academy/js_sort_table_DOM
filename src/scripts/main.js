'use strict';

document.addEventListener('click', (e) => {
  if (!e.target.closest('th')) {
    return;
  }

  const table = document.querySelector('table');
  const rows = table.rows;
  const positionTh = e.target.cellIndex;

  const contentColums = [...rows]
    .map((row) => row.cells[positionTh].textContent)
    .splice(1)
    .splice(0, rows.length - 2);

  contentColums.sort((a, b) => {
    const isText =
      e.target.textContent === 'Position' || e.target.textContent === 'Name';

    if (isText) {
      return a.localeCompare(b);
    }

    if (e.target.textContent === 'Salary') {
      const numberA = a.slice(1).replaceAll(',', '');
      const numberB = b.slice(1).replaceAll(',', '');

      return numberA - numberB;
    }

    const numA = Number(a);
    const numB = Number(b);

    return numA - numB;
  });

  let indexContent = 0;

  for (let i = 1; i < rows.length - 1; i++) {
    rows[i].cells[positionTh].textContent = contentColums[indexContent];
    indexContent++;
  }
});
