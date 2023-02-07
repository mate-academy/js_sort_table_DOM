'use strict';

const thead = document.querySelector('thead');
const tbody = document.querySelector('tbody');

const tbodyRows = Array.from(tbody.rows);

const onlyNumber = string => +string.replace(/[$,]/g, '');

thead.addEventListener('click', e => {
  const sort = tbodyRows.sort((a, b) => {
    const first = a.children[e.target.cellIndex].innerText;
    const second = b.children[e.target.cellIndex].innerText;

    return (!isNaN(onlyNumber(first)))
      ? onlyNumber(first) - onlyNumber(second)
      : first.localeCompare(second);
  });

  tbody.append(...sort);
});
