'use strict';

const thead = document.querySelector('thead');
const tbody = document.querySelector('tbody');

let check;
let sort;

thead.addEventListener('click', (events) => {
  check = events.target.cellIndex;

  sort = [...tbody.children].sort((a, b) => {
    const sortA = a.cells[check].textContent.replace(/[$,]/g, '');
    const sortB = b.cells[check].textContent.replace(/[$,]/g, '');

    return isNaN(sortA)
      ? sortA.localeCompare(sortB)
      : sortA - sortB;
  });

  tbody.append(...sort);
});
