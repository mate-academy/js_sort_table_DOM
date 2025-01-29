'use strict';

const table = document.querySelector('table');
const tHead = table.tHead.rows[0].cells;
const tBody = table.tBodies[0].rows;

[...tHead].forEach((th, i) => {
  th.addEventListener('click', () => {
    const sortedBody = [...tBody];

    sortedBody.sort((tr1, tr2) => {
      const tr1Value = tr1.cells[i].innerText;
      const tr2Value = tr2.cells[i].innerText;

      if (isNaN(tr1Value)) {
        if (tr1Value.startsWith('$')) {
          const firstSalary = +tr1Value.slice(1).replace(',', '.');
          const secondSalary = +tr2Value.slice(1).replace(',', '.');

          return firstSalary - secondSalary;
        }

        return tr1Value.localeCompare(tr2Value);
      } else {
        return tr1Value - tr2Value;
      }
    });

    table.tBodies[0].append(...sortedBody);
  });
});
