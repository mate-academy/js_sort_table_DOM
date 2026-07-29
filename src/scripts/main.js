'use strict';

const table = document.querySelector('table');

table.addEventListener('click', (e) => {
  if (e.target.closest('thead')) {
    const ind = [...table.rows[0].cells].indexOf(e.target);
    let values = [...table.tBodies[0].children].map((row) => {
      if (isNaN(+row.cells[ind].textContent)) {
        return row.cells[ind].textContent;
      } else {
        return +row.cells[ind].textContent;
      }
    });

    values = values.sort((a, b) => {
      if (typeof a === 'string') {
        if (a.includes('$')) {
          return (
            +a.replace('$', '').replace(',', '') -
            +b.replace('$', '').replace(',', '')
          );
        }

        return a.localeCompare(b);
      }

      return a - b;
    });

    for (let i = 0; i < [...table.tBodies[0].rows].length; i++) {
      [...table.tBodies[0].rows][i].children[ind].textContent = values[i];
    }
  }
});
