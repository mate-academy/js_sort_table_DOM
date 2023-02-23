'use strict';

function convert(stringNumber) {
  return Number(stringNumber.toLocaleString().replace(/\D/g, ''));
}

function compareVariables(aa, bb, eventFunc) {
  let a = aa.children[eventFunc.target.cellIndex].textContent;
  let b = bb.children[eventFunc.target.cellIndex].textContent;

  if (convert(a) > 0) {
    a = (convert(a));
    b = (convert(b));
  }

  return a < b ? -1 : 1;
}

document.querySelector('thead').addEventListener('click', (eventFunc) => {
  const bodyRows = document.querySelector('tbody');
  const arrayElements = [...bodyRows.children]
    .sort((aa, bb) => compareVariables(aa, bb, eventFunc));

  bodyRows.append(...arrayElements);
});
