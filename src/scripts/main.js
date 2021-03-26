'use strict';

const list = document.querySelector('tbody');
const headers = document.querySelector('thead');

headers.addEventListener('click', (e) => {
  const index = e.target.cellIndex;
  const sorted = [...list.rows].sort((a, b) => {
    const first = a.cells[index].textContent.replace('$', '').replace(',', '');
    const second = b.cells[index].textContent.replace('$', '').replace(',', '');

    if (isNaN(+first)) {
      return first.localeCompare(second);
    }

    return first - second;
  });

  list.append(...sorted);
});
