'use strict';

const thead = document.querySelector('thead');
const tbody = document.querySelector('tbody');
const bodyTr = document.querySelectorAll('tbody tr');

thead.addEventListener('click', (e) => {
  function changeNum(str) {
    return +str
      .split('$')
      .join('')
      .split(',')
      .join('');
  }

  const sortTable = [...bodyTr].sort((a, b) => {
    const firstTr = a
      .children[e.target.cellIndex]
      .textContent;

    const seccondTr = b
      .children[e.target.cellIndex]
      .textContent;

    return !isNaN(changeNum(firstTr))
      ? changeNum(firstTr) - changeNum(seccondTr)
      : firstTr.localeCompare(seccondTr);
  });

  tbody.append(...sortTable);
});
