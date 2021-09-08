'use strict';

const table = document.querySelector('tbody');

const rows = [...table.querySelectorAll('tr')];

const headers = [...document.querySelectorAll('thead th')];

for (let element of headers) {
  element.addEventListener('click', e => {
    let i = headers.indexOf(e.target);
      rows.sort(function (a, b) {
        if (a.cells[i].textContent.includes('$')) {
          return parseInt(a.cells[i].textContent.slice(1))
            - parseInt(b.cells[i].textContent.slice(1));
        } else {
          return a.cells[i].textContent.localeCompare(b.cells[i].textContent)
        }
      });

    for (let element of rows) {
      table.append(element);
    }
  });
}
