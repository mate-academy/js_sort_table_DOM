'use strict';

const thead = document.querySelector('thead');
const headTableRow = thead.querySelector('tr');
const tbody = document.querySelector('tbody');
const tr = [...tbody.querySelectorAll('tr')];

headTableRow.addEventListener('click', (eve) => {
  sortList(tr, [...headTableRow.children].indexOf(eve.target));
});

function sortList(list, i) {
  if (i === 0 || i === 1) {
    list.sort((a, b) => {
      return a.children[i].textContent.localeCompare(b.children[i].textContent);
    });
  }

  if (i === 2 || i === 3) {
    list.sort((a, b) => {
      return toNum(a.children[i].textContent)
      - toNum(b.children[i].textContent);
    });
  }

  tbody.append(...list);
}

function toNum(item) {
  let result = '';

  for (const i of item) {
    if (('0123456789').includes(i)) {
      result += i;
    }
  }

  return +result;
}
