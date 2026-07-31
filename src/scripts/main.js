'use strict';

const table = document.querySelector('table');

table.addEventListener('click', (e) => {
  if (e.target.closest('thead')) {
    const ind = [...table.rows[0].cells].indexOf(e.target);
    const rows = [...table.tBodies[0].rows].sort((rowA, rowB) => {
      const a = rowA.cells[ind].textContent;
      const b = rowB.cells[ind].textContent;

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

    table.tBodies[0].replaceChildren(...rows);
  }
});
