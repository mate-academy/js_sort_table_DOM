'use strict';

const head = document.querySelector('thead');
const body = document.querySelector('tbody');

head.addEventListener('click', (e) => {
  const position = e.target.cellIndex;

  const sort = [...body.children].sort((a, b) => {
    const sortA = a.cells[position].textContent.replace(',', '')
      .replace('$', '');
    const sortB = b.cells[position].textContent.replace(',', '')
      .replace('$', '');

    if (isNaN(sortA)) {
      return sortA.localeCompare(sortB);
    }

    return sortA - sortB;
  });

  body.append(...sort);
});
