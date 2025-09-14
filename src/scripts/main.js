'use strict';

const tab = document.querySelector('table');

function sortTable() {
  if (!tab) {
    return;
  }

  const headRow = tab.rows[0];

  function extractNumbe(str) {
    const elem = str.replace(/[^\d.,-]/g, '');

    return elem ? Number(elem) : NaN;
  }

  headRow.addEventListener('click', (e) => {
    const arrayRows = Array.from(tab.tBodies[0].rows);
    const cell = e.target.closest('th , td');

    if (cell) {
      const colIndex = cell.cellIndex;
      const newSortArr = arrayRows.sort((a, b) => {
        const va = a.cells[colIndex].textContent.trim();
        const vb = b.cells[colIndex].textContent.trim();
        const na = Number(va);
        const nb = Number(vb);

        if (!Number.isNaN(na) && !Number.isNaN(nb)) {
          return na - nb;
        }

        if (
          !Number.isNaN(extractNumbe(va)) &&
          !Number.isNaN(extractNumbe(vb))
        ) {
          return extractNumbe(va) - extractNumbe(vb);
        } else {
          return va.localeCompare(vb);
        }
      });

      newSortArr.forEach((el) => tab.tBodies[0].append(el));
    }
  });
}

sortTable();
