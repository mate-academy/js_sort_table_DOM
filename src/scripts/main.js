'use strict';

const table = document.querySelector('table');
const thead = table.querySelector('thead');
const tbody = table.querySelector('tbody');
const headers = Array.from(thead.querySelectorAll('th'));

function cellValue(tr, colIndex) {
  return tr.children[colIndex].textContent.trim();
}

function normalize(val) {
  const num = Number(val.replace(/[$,\s]/g, ''));

  return Number.isNaN(num) ? val.toLowerCase() : num;
}

headers.forEach((th, colIndex) => {
  th.addEventListener('click', () => {
    const rows = Array.from(tbody.querySelectorAll('tr'));

    rows.sort((a, b) => {
      const av = normalize(cellValue(a, colIndex), colIndex);
      const bv = normalize(cellValue(b, colIndex), colIndex);

      if (av > bv) {
        return 1;
      }

      if (av < bv) {
        return -1;
      }

      return 0;
    });
    rows.forEach((tr) => tbody.appendChild(tr));
  });
});
