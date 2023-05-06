'use strict';

const table = document.querySelector('thead');
const data = document.querySelector('tbody');
const rows = document.querySelectorAll('tbody tr');

function toNumber(num) {
  return num.slice(1).split(',').join('.');
}

table.addEventListener('click', el => {
  const header = el.target.parentNode;
  const place = [...header.children].indexOf(el.target);

  let sortCol = [...rows]
    .sort((a, b) => a.children[place]
      .innerHTML > b.children[place].innerHTML ? 1 : -1);

  if (place === 3) {
    sortCol = [...rows]
      .sort((a, b) => toNumber(a.children[place]
        .innerHTML) - toNumber(b.children[place].innerHTML));
  }

  data.innerHTML = '';

  for (const tr of sortCol) {
    data.append(tr);
  }
});
