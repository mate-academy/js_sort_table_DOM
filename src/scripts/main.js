'use strict';

function convert(stringNumber) {
  return Number(stringNumber.toLocaleString().replace(/\D/g, ''));
}

function compareVariables(aa, bb, events) {
  let a = aa.children[events.target.cellIndex].textContent;
  let b = bb.children[events.target.cellIndex].textContent;

  if (convert(a) > 0) {
    a = (convert(a));
    b = (convert(b));
  }

  return a < b ? -1 : 1;
}

document.querySelector('thead').addEventListener('click', (eventFunc) => {
  const bodyRows = document.querySelector('tbody');

  bodyRows
    .append(...[...bodyRows.children]
      .sort((a, b) => compareVariables(a, b, eventFunc)));
});
