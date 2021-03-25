'use strict';

let th = [...document.querySelectorAll('thead th')];
let tr = [...document.querySelectorAll('tbody tr')];
let count = 0;

for (let j = 0; j < th.length; j++) {
  th[j].addEventListener('click', (e) => {
    const copy = [];

    for (let i = 0; i < tr.length; i++) {
      copy.push(tr[i].cloneNode(true));
    }

    if (copy[0].children[j].textContent[0] === '$') {
      if (count % 2 === 0) {
        copy.sort((a, b) =>
          parseInt(a.children[j].textContent.replace(/[^\d]/g, '')
          - (parseInt(b.children[j].textContent.replace(/[^\d]/g, '')))));
      } else {
        copy.sort((a, b) =>
          parseInt(b.children[j].textContent.replace(/[^\d]/g, '')
          - (parseInt(a.children[j].textContent.replace(/[^\d]/g, '')))));
      }
    } else {
      if (count % 2 === 0) {
        copy.sort((a, b) =>
          a.children[j].textContent.localeCompare(b.children[j].textContent));
      } else {
        copy.sort((a, b) =>
          b.children[j].textContent.localeCompare(a.children[j].textContent));
      }
    }

    for (let i = 0; i < tr.length; i++) {
      tr[i].replaceWith(copy[i]);
    }

    th = [...document.querySelectorAll('thead th')];
    tr = [...document.querySelectorAll('tbody tr')];
    count++;
  });
}
