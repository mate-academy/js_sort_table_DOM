'use strict';

const thead = document.querySelector('thead');
const headTableRow = thead.querySelector('tr');
const tbody = document.querySelector('tbody');
const tr = [...tbody.querySelectorAll('tr')];

headTableRow.addEventListener('click', (e) => {
  sortList(tr, [...headTableRow.children].indexOf(e.target));
});

function sortList(list, i) {
  switch (i) {
    case 0:
    case 1:
      list.sort((a, b) => {
        const textA = a.children[i].textContent;
        const textB = b.children[i].textContent;

        return textA.localeCompare(textB);
      });
      break;

    case 2:
    case 3:
      list.sort((a, b) => {
        return toNum(a.children[i].textContent)
        - toNum(b.children[i].textContent);
      });
      break;
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
