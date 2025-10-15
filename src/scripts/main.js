'use strict';

const table = document.querySelector('table');

const toNumber = (value) => {
  let cleaned = '';

  for (const char of value) {
    if ('0123456789'.includes(char)) {
      cleaned += char;
    }
  }

  if (cleaned === '') {
    return NaN;
  }

  return Number(cleaned);
};

if (table) {
  table.addEventListener('click', (e) => {
    const th = e.target.closest('th');

    if (!th) {
      return;
    }

    const columnIndex = th.cellIndex;
    const tBodies = [...table.tBodies];

    if (!tBodies || tBodies.length === 0) {
      return;
    }

    tBodies.forEach((tBody) => {
      const rows = [...tBody.rows];

      rows.sort((rowA, rowB) => {
        const a = rowA.cells[columnIndex].textContent.trim();
        const b = rowB.cells[columnIndex].textContent.trim();

        const numberA = toNumber(a);
        const numberB = toNumber(b);

        if (!isNaN(numberA) && !isNaN(numberB)) {
          return numberA - numberB;
        }

        return a.localeCompare(b, undefined, {
          numeric: true,
          sensitivity: 'base',
        });
      });

      tBody.append(...rows);
    });
  });
}
