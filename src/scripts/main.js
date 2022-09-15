'use strict';

const table = document.getElementsByTagName('table')[0];

table.addEventListener('click', (evt) => {
  const targetEl = evt.target.closest('th');

  if (targetEl) {
    const arrTBody = Array.from(table.rows).slice(1, -1);

    arrTBody.sort((prevRow, currentRow) => {
      const index = [].indexOf.call(targetEl.parentNode.children, targetEl);
      const prev = prevRow.cells[index].textContent;
      const current = currentRow.cells[index].textContent;

      switch (index) {
        case 2:
          return Number(prev) - Number(current);
        case 3:

          return getNumber(prev) - getNumber(current);

        default:
          if (prev === current) {
            return 0;
          }

          if (prev > current) {
            return 1;
          }

          return -1;
      }
    })
      .forEach(row => {
        row.remove();
        table.children[1].append(row);
      });
  }
});

function getNumber(str) {
  return Number(str.split('$')[1].split(',').join(''));
};
