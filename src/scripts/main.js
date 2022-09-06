'use strict';

const thead = document.querySelector('thead');
const tbody = document.querySelector('tbody');

thead.addEventListener('click', (events) => {
  const check = events.target.cellIndex;

  const sort = [...tbody.children].sort((a, b) => {
    const sortA = a.cells[check].textContent.replace(',', '').replace('$', '');
    const sortB = b.cells[check].textContent.replace(',', '').replace('$', '');

    return isNaN(sortA)
      ? sortA.localeCompare(sortB)
      : sortA - sortB;
  });

  tbody.append(...sort);
});
