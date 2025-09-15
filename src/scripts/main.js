'use strict';

const tbody = document.querySelector('tbody');
const headers = document.querySelector('thead tr');

headers.addEventListener('click', (e) => {
  const bodyRows = document.querySelectorAll('tbody tr');

  const listToSort = [];

  const th = e.target.closest('th');

  if (!th) {
    return;
  }

  const aimIndx = th?.cellIndex;

  if (typeof aimIndx !== 'number' || aimIndx === -1) {
    return;
  }

  for (let i = 0; i < bodyRows.length; i++) {
    const row = bodyRows[i];

    if (row.children.length < aimIndx) {
      continue;
    }

    listToSort.push({
      aimCell: row.children[aimIndx],
      row: row,
      originalIndex: i,
    });
  }

  listToSort.sort((elem1, elem2) => {
    if (
      typeof elem1 === 'undefined' ||
      elem1 === null ||
      typeof elem2 === 'undefined' ||
      elem2 === null
    ) {
      return;
    }

    if (aimIndx === 0 || aimIndx === 1) {
      return elem1.aimCell.textContent
        .toLowerCase()
        .localeCompare(elem2.aimCell.textContent.toLowerCase());
    } else if (aimIndx === 2) {
      return +elem1.aimCell.textContent - +elem2.aimCell.textContent;
    } else if (aimIndx === 3) {
      const newElem1 = Number(
        elem1.aimCell.textContent.trim().replace(/[^0-9]+/g, ''),
      );
      const newElem2 = Number(
        elem2.aimCell.textContent.trim().replace(/[^0-9]+/g, ''),
      );

      return newElem1 - newElem2;
    }
  });

  for (let i = 0; i < listToSort.length; i++) {
    tbody.appendChild(listToSort[i].row);
  }
});
