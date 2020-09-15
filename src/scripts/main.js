'use strict';

const head = document.querySelector('thead');
const body = document.querySelector('tbody');

head.addEventListener('click', (event) => {
  const sortBy = event.target.innerText;

  switch (sortBy) {
    case 'Name':
      [...body.rows].sort((a, b) => {
        return a.cells[0].innerText.localeCompare(b.cells[0].innerText);
      }).forEach(elem => body.append(elem));

      break;
    case 'Position':
      [...body.rows].sort((a, b) => {
        return a.cells[1].innerText.localeCompare(b.cells[1].innerText);
      }).forEach(elem => body.append(elem));

      break;
    case 'Age':
      [...body.rows].sort((a, b) => {
        return +a.cells[2].innerText.localeCompare(+b.cells[2].innerText);
      }).forEach(elem => body.append(elem));

      break;
    case 'Salary':
      [...body.rows].sort((a, b) => {
        return +a.cells[2].innerText.slice(1)
          .localeCompare(+b.cells[2].innerText.slice(1));
      }).forEach(elem => body.append(elem));

      break;
  }
});
