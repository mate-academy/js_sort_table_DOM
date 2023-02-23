'use strict';

function convert(stringNumber) {
  return Number(stringNumber.toLocaleString().replace(/\D/g, ''));
}

document.querySelector('thead').addEventListener('click', (eventFunc) => {
  const bodyRows = document.querySelector('tbody').querySelectorAll('tr');
  const table = [...bodyRows]
    .sort((aa, bb) => {
      let a = aa.children[eventFunc.target.cellIndex].textContent;
      let b = bb.children[eventFunc.target.cellIndex].textContent;

      if (convert(a) > 0) {
        a = (convert(a));
        b = (convert(b));
      }

      return a < b ? -1 : 1;
    });

  document.querySelector('tbody').append(...table);
});
