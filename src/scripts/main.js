'use strict';

const tbody = document.querySelector('tbody');
const thItems = document.querySelectorAll('th');
const trItems = tbody.querySelectorAll('tr');

function toNum(str) {
  return +str.replace(/[$,]/g, '');
};

[...thItems].map((el, i) => {
  el.addEventListener('click', () => {
    const sorted = [...trItems].sort((prev, curr) => {
      const a = prev.children[i].innerText;
      const b = curr.children[i].innerText;

      if (!isNaN(toNum(a))) {
        return toNum(a) - toNum(b);
      } else {
        return a.localeCompare(b);
      }
    });

    tbody.append(...sorted);
  });
});
