'use strict';

function convert(stringNumber) {
  return Number(stringNumber.toLocaleString().replace(/\D/g, ''));
}

// eslint-disable-next-line no-shadow
function compareVariables(aa, bb, event) {
  let a = aa.children[event.target.cellIndex].textContent;
  let b = bb.children[event.target.cellIndex].textContent;

  if (convert(a) > 0) {
    a = (convert(a));
    b = (convert(b));
  }

  return a < b ? -1 : 1;
}

document.querySelector('thead').addEventListener('click', (eventFunc) => {
  const bodyRows = document.querySelector('tbody');
  const arrayElements = [...bodyRows.children]
    .sort((a, b) => compareVariables(a, b, eventFunc));

  bodyRows.append(...arrayElements);
});
