'use strict';

// write code here
const th = document.querySelectorAll('th');

for (const head of th) {
  head.addEventListener('click', sort);
}

function sort() {
  const arr = [...document.querySelector('table').rows].slice(1);

  arr.sort((a, b) => parseFloat(a.cells[3].innerHTML
    .replaceAll('$', '')
    .replaceAll(',', '')) - parseFloat(b.cells[3].innerHTML
    .replaceAll('$', '').replaceAll(',', '')));

  const tbody = document.querySelector('tbody');

  tbody.append(...arr);
}
