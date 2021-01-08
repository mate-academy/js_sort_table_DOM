'use strict';

const heads = document.querySelector('thead tr');
const list = [...document.querySelectorAll('tbody tr')];
const names = [...document.querySelectorAll('thead tr th')]
  .map(cell => cell.innerText);

function ascending(e) {
  const i = names.indexOf(e.target.innerText);

  if (i === 3) {
    list.sort((a, b) =>
      +a.children[i].innerText.replace('$', '').replace(',', '')
    - +b.children[i].innerText.replace('$', '').replace(',', ''));
  } else {
    list.sort((a, b) =>
      a.children[i].innerText.localeCompare(b.children[i].innerText));
  }

  list.forEach(row => document.querySelector('tbody').append(row));
}

heads.addEventListener('click', ascending);
