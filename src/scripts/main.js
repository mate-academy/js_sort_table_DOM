'use strict';

const tbody = document.querySelector('tbody');

const array = [...tbody.rows].map(row =>
  [
    row.cells[0].innerText,
    row.cells[1].innerText,
    row.cells[2].innerText,
    row.cells[3].innerText,
  ]
);

document.addEventListener('click', e => {
  if (e.target.tagName === 'TH') {
    switch (e.target.innerText) {
      case 'Name':
        array.sort((a, b) => a[0].localeCompare(b[0]));
        break;
      case 'Position':
        array.sort((a, b) => a[1].localeCompare(b[1]));
        break;
      case 'Age':
        array.sort((a, b) => a[2] - b[2]);
        break;
      case 'Salary':
        array.sort((a, b) => {
          return a[3].replace(/[^0-9]/g, '') - b[3].replace(/[^0-9]/g, '');
        });
        break;
    }
  }

  for (let i = 0; i < tbody.rows.length; i++) {
    for (let j = 0; j < tbody.rows[i].cells.length; j++) {
      tbody.rows[i].cells[j].innerText = array[i][j];
    }
  }
});
