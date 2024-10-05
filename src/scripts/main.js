'use strict';

const heads = document.querySelectorAll('th');
const body = document.querySelector('table > tbody');
const rows = [...body.querySelectorAll('tr')];

function sort(index) {
  rows.sort((a, b) => {
    return a.cells[index].textContent
      .trim()
      .localeCompare(b.cells[index].textContent.trim(), 'en', {
        numeric: true,
      });
  });

  body.append(...rows);
}

heads.forEach((head, index) => {
  head.addEventListener('click', () => {
    sort(index);
  });
});
