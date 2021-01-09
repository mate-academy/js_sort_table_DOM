'use strict';

const table = document.querySelector('table');
const tableBody = table.querySelector('tbody');
const tableHead = table.tHead.querySelectorAll('th');

table.tHead.addEventListener('click', (e) => {
  const index = [...tableHead].indexOf(e.target);
  const list = [...tableBody.children];

  list.sort((a, b) => {
    let A = a.children[index].textContent;
    let B = b.children[index].textContent;

    if (A[0] === '$') {
      A = A.split(',').join('').slice(1);
      B = B.split(',').join('').slice(1);
    }

    if (isNaN(A)) {
      return A.localeCompare(B);
    }

    return (+A - +B);
  });

  tableBody.append(...list);
});
