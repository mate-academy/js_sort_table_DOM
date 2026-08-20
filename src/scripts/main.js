'use strict';

const headers = [...document.querySelectorAll('thead th')];
const trs = [...document.querySelectorAll('tbody tr')];
const body = document.querySelector('tbody');
const head = document.querySelector('thead');

const names = headers.map((header) => {
  return header.textContent;
});

head.addEventListener('click', (e) => {
  const index = names.indexOf(e.target.firstChild.textContent);

  const sorted = trs.sort((el1, el2) => {
    const element1 = el1.children[index].textContent;
    const element2 = el2.children[index].textContent;

    return (
      toNum(element1) - toNum(element2) || element1.localeCompare(element2)
    );
  });

  // trs.forEach((tr, i) => {
  //   tbody.append(sorted[i]);
  // });
  sorted.forEach((s) => body.append(s));
});

function toNum(el) {
  return el.replaceAll('$', '').replaceAll(',', '');
}
