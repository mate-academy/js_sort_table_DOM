'use strict';

function convert(stringNumber) {
  return Number(stringNumber.toLocaleString().replace(/\D/g, ''));
}

document.querySelector('thead').addEventListener('click', (eventFunc) => {
  const bodyRows = document.querySelector('tbody');
  const table = [...bodyRows.children].sort((aa, bb) => {
    let a = aa.children[eventFunc.target.cellIndex].textContent;
    let b = bb.children[eventFunc.target.cellIndex].textContent;

    if (convert(a) > 0) {
      a = (convert(a));
      b = (convert(b));
    }

    return a < b ? -1 : 1;
  });

  bodyRows.append(...table);
});
