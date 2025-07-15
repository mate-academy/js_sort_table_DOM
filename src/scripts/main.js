'use strict';

// write code here
const tBody = document.querySelector('tbody');
const allHeaders = document.querySelectorAll('thead th');
const allRows = document.querySelectorAll('tbody tr');

for (let i = 0; i < allHeaders.length; i++) {
  const header = allHeaders[i];
  const rowsToSort = [];

  header.addEventListener('click', () => {
    for (let j = 0; j < allRows.length; j++) {
      const tr = allRows[j];

      const cell = tr.cells[i];
      const value = cell.textContent.trim();

      rowsToSort.push({ row: tr, value });
    }

    const firstValue = rowsToSort[0].value;

    if (firstValue.includes('$')) {
      rowsToSort.sort((a, b) => {
        const result =
          Number(a.value.replace(/[^0-9.]/g, '')) -
          Number(b.value.replace(/[^0-9.]/g, ''));

        return result;
      });
    } else if (!isNaN(Number(firstValue))) {
      rowsToSort.sort((a, b) => {
        return Number(a.value) - Number(b.value);
      });
    } else {
      rowsToSort.sort((a, b) => a.value.localeCompare(b.value));
    }

    tBody.innerHTML = '';
    rowsToSort.forEach((obj) => tBody.appendChild(obj.row));
  });
}
