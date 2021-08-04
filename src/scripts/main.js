'use strict';

// write code here
const headers = document.querySelectorAll('th');
const body = document.querySelector('tbody');
const array = [...body.rows].map(row =>
  [
    row.cells[0].innerText,
    row.cells[1].innerText,
    row.cells[2].innerText,
    row.cells[3].innerText,
  ]
);

for (const th of headers) {
  th.addEventListener('click', (e) => {
    for (let i = 0; i < body.rows.length; i++) {
      for (let j = 0; j < body.rows[i].cells.length; j++) {
        if (e.target.innerText === 'Name') {
          array.sort((a, b) => a[0].localeCompare(b[0]));
          body.rows[i].cells[j].innerText = array[i][j];
        }

        if (e.target.innerText === 'Position') {
          array.sort((a, b) => a[1].localeCompare(b[1]));
          body.rows[i].cells[j].innerText = array[i][j];
        }

        if (e.target.innerText === 'Age') {
          array.sort((a, b) => a[2] - b[2]);
          body.rows[i].cells[j].innerText = array[i][j];
        }

        if (e.target.innerText === 'Salary') {
          array.sort((a, b) => a[3].slice(1).replace(/,/g, '')
          - b[3].slice(1).replace(/,/g, ''));
          body.rows[i].cells[j].innerText = array[i][j];
        }
      }
    }
  });
}
