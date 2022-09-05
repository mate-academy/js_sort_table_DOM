'use strict';

const thead = document.querySelector('thead');
const tbody = document.querySelector('tbody');
const trs = document.querySelectorAll('tbody tr');

function converter(number) {
  return number.slice(1).split(',').join('.');
}

thead.addEventListener('click', e => {
  const parentNode = e.target.parentNode;
  const position = [...parentNode.children].indexOf(e.target);
  let sorted = [...trs]
    .sort((a, b) => a.children[position]
      .innerHTML > b.children[position].innerHTML ? 1 : -1);

  if (position === 3) {
    sorted = [...trs]
      .sort((a, b) => converter(a.children[position]
        .innerHTML) - converter(b.children[position].innerHTML));
  }

  tbody.innerHTML = '';

  for (const tr of sorted) {
    tbody.append(tr);
  }
});
