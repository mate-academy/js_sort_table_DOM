'use strict';

const headers = document.querySelectorAll('thead th');
const tableBody = document.querySelector('tbody');
const tableRows = [...tableBody.rows];

function toNumber(str) {
  return +str.replace('$', '').split(',').join('');
}

headers.forEach(header => {
  header.addEventListener('click', (e) => {
    const headerIndex = [...headers].indexOf(e.target);

    tableRows.sort((a, b) => {
      const x = a.cells[headerIndex].innerText;
      const y = b.cells[headerIndex].innerText;

      if (e.target.innerText === 'Salary') {
        return toNumber(x) - toNumber(y);
      }

      return x - y || x.localeCompare(y);
    });

    tableBody.append(...tableRows);
  });
});
