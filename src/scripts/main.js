'use strict';

const table = document.querySelector('table');

function sortTable(column, asc = true) {
  const direction = asc ? 1 : -1;
  const tbody = table.querySelector('tbody');
  const rows = Array.from(tbody.querySelectorAll('tr'));

  const sortedRow = rows.sort((a, b) => {
    let aText = a.querySelector(`td:nth-child(${column + 1})`).textContent;
    let bText = b.querySelector(`td:nth-child(${column + 1})`).textContent;

    if (aText.includes('$') || bText.includes('$')) {
      aText = +aText.split('$').join('').split(',').join('');
      bText = +bText.split('$').join('').split(',').join('');
    };

    return aText > bText ? (1 * direction) : (-1 * direction);
  });

  tbody.append(...sortedRow);
};

const headers = Array.from(table.querySelectorAll('thead tr th'));

headers.forEach(header => {
  header.addEventListener('click', (events) => {
    sortTable(headers.indexOf(events.target));
  });
});
