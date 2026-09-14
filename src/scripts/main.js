'use strict';

const head = document.querySelector('thead');
const headers = head.querySelectorAll('th');

function sortTable(count) {
  const table = document.querySelector('tbody');
  const rows = [...table.querySelectorAll('tr')];

  rows.sort((a, b) => {
    const aElem = a.cells[count].textContent.trim();
    const bElem = b.cells[count].textContent.trim();

    const aElemNum = Number(aElem.replace(/[$,]/g, ''));
    const bElemNum = Number(bElem.replace(/[$,]/g, ''));

    if (!Number.isNaN(aElemNum) && !Number.isNaN(bElemNum)) {
      return aElemNum - bElemNum;
    }

    return aElem.localeCompare(bElem);
  });

  rows.forEach((row) => table.appendChild(row));
}

headers.forEach((header) => {
  header.addEventListener('click', () => {
    const counter = [...headers].indexOf(header);

    sortTable(counter);
  });
});

// console.log(Array.from(rows));
