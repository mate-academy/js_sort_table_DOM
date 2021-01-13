'use strict';

const tbody = document.querySelector('tbody');
const thItems = document.querySelector('thead').children[0];
const trItems = tbody.querySelectorAll('tr');

function toNum(str) {
  return +str.replace(/[$,]/g, '');
}

thItems.addEventListener('click', (e) => {
  const sorted = [...trItems].sort((prev, curr) => {
    const a = prev.children[e.target.cellIndex].innerText;
    const b = curr.children[e.target.cellIndex].innerText;

    if (!isNaN(toNum(a))) {
      return toNum(a) - toNum(b);
    } else {
      return a.localeCompare(b);
    }
  });

  tbody.append(...sorted);
});
