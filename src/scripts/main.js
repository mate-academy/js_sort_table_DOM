'use strict';

const headers = [...document.querySelectorAll('thead th')];
const trs = [...document.querySelectorAll('tbody tr')];
const head = document.querySelector('thead');

const names = headers.map((header) => {
  return header.textContent;
});

head.addEventListener('click', (e) => {
  const index = names.indexOf(e.target.firstChild.textContent);

  const column = trs.map((tr) => {
    return tr.children[index].textContent;
  });

  const sorted = column.sort((el1, el2) => {
    return toNum(el1) - toNum(el2) || el1.localeCompare(el2);
  });

  trs.forEach((tr, i) => {
    tr.children[index].textContent = sorted[i];
  });
});

function toNum(el) {
  return el.replaceAll('$', '').replaceAll(',', '');
}
