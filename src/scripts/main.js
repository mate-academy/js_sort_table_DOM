'use strict';

const thead = document.querySelector('thead');
const tbody = document.querySelector('tbody');

thead.addEventListener('click', (event) => {
  if (event.target.innerText === 'Name') {
    const list = [...tbody.rows].sort((x, y) =>
      x.cells[0].innerText.localeCompare(y.cells[0].innerText));

    tbody.append(...list);
  }

  if (event.target.innerText === 'Position') {
    const list = [...tbody.rows].sort((x, y) =>
      x.cells[1].innerText.localeCompare(y.cells[1].innerText));

    tbody.append(...list);
  }

  if (event.target.innerText === 'Age') {
    const list = [...tbody.rows].sort((x, y) =>
      (+x.cells[2].innerText) - (+y.cells[2].innerText));

    tbody.append(...list);
  }

  if (event.target.innerText === 'Salary') {
    const list = [...tbody.rows].sort((x, y) =>
      +x.cells[3].innerText.slice(1).split(',').join('')
      - (+y.cells[3].innerText.slice(1).split(',').join('')));

    tbody.append(...list);
  }
});
