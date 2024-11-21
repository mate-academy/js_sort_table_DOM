'use strict';

const head = document.querySelector('thead');
const body = document.querySelector('tbody');

head.addEventListener('click', ev => {
  const act = ev.target.cellIndex;
  const sorted = [...body.children].sort((a, b) => {
    let sortA = a.cells[act].innerText;
    let sortB = b.cells[act].innerText;

    if (sortA.includes('$')) {
      sortA = sortA.replace(/[$,]/g, '');
      sortB = sortB.replace(/[$,]/g, '');

      return sortA - sortB;
    }

    return sortA.localeCompare(sortB);
  });

  body.append(...sorted);
});
