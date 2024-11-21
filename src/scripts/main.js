/* eslint-disable function-paren-newline */
'use strict';

window.addEventListener('DOMContentLoaded', app);

function app() {
  const table = document.querySelector('table');
  const tHead = table.tHead;

  [...tHead.rows[0].cells].forEach((cell, index) =>
    cell.addEventListener('click', (e) =>
      sortHandler(e, cell.innerText.toLowerCase().trim(), index),
    ),
  );

  function sortHandler(e, sortBy, index) {
    const tBody = table.tBodies[0];

    const sorted = [...tBody.rows].sort((a, b) => {
      const first = a.cells[index].innerText;
      const second = b.cells[index].innerText;

      switch (sortBy) {
        case 'age':
          return +first - +second;

        case 'salary':
          return extractNumber(first) - extractNumber(second);

        default:
          return first.localeCompare(second);
      }
    });
    const newTbody = document.createElement('tbody');

    sorted.forEach((tr) => newTbody.appendChild(tr));

    tBody.remove();
    table.appendChild(newTbody);
  }
}

function extractNumber(str) {
  return parseFloat(str.replace(/[$,]/g, ''));
}
