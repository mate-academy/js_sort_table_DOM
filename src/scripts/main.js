'use strict';

// write code here
const headers = [...document.querySelectorAll('th')];

const rowsNoFirst = [...document.querySelectorAll('tbody tr')];

headers.forEach((header) => {
  header.addEventListener('click', () => {
    if (rowsNoFirst.length === 0) {
      return;
    }

    const row = rowsNoFirst[0];

    const value = row.cells[header.cellIndex].textContent;
    const string = value.replace(/[^0-9.-]/g, '');

    if (string.length !== 0 && !Number.isNaN(Number(string))) {
      rowsNoFirst.sort((a, b) => {
        const index = header.cellIndex;
        const x = Number(a.cells[index].textContent.replace(/[^0-9.-]/g, ''));
        const y = Number(b.cells[index].textContent.replace(/[^0-9.-]/g, ''));
        const result = x - y;

        return result;
      });
    } else {
      rowsNoFirst.sort((a, b) => {
        const x = a.cells[header.cellIndex].textContent;
        const y = b.cells[header.cellIndex].textContent;
        const result = x.toLowerCase().localeCompare(y.toLowerCase());

        return result;
      });
    }

    const body = document.querySelector('tbody');

    for (const r of rowsNoFirst) {
      body.append(r);
    }
  });
});
