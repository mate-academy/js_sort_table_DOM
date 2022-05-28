'use strict';

const table = document.querySelector('table');

table.addEventListener('click', (e) => {
  const item = e.target;

  if (!item.closest('thead')) {
    return;
  }

  function sorted(element) {
    const column = element.cellIndex;

    if (element.innerHTML.toLowerCase() !== 'salary'
      && element.innerHTML.toLowerCase() !== 'age') {
      const sortedRows = [...table.rows]
        .slice(1, table.rows.length - 1)
        .sort((rowA, rowB) => rowA.cells[column]
          .innerHTML.localeCompare(rowB.cells[column]
            .innerHTML));

      table.tBodies[0].append(...sortedRows);
    } else {
      const sortedRows = [...table.rows]
        .slice(1, table.rows.length - 1)
        .sort((rowA, rowB) => +rowA.cells[column]
          .innerHTML.split('$').join('').split(',').join('')
          - (+rowB.cells[column]
            .innerHTML.split('$').join('').split(',').join('')));

      table.tBodies[0].append(...sortedRows);
    }
  }
  sorted(item);
});
