'use strict';

const tr = document.querySelectorAll('tbody tr');
const thead = document.querySelector('thead');
const tbody = document.querySelector('tbody');

function takeNumber(str) {
  return +str.replace(/[$,]/g, '');
}

thead.addEventListener('click', (e) => {
  const sorted = [...tr].sort((tdA, tdB) => {
    const prev = tdA.children[e.target.cellIndex].innerText;
    const curr = tdB.children[e.target.cellIndex].innerText;

    if (!isNaN(takeNumber(prev))) {
      return takeNumber(prev) - takeNumber(curr);
    } else {
      return prev.localeCompare(curr);
    }
  });

  tbody.append(...sorted);
});
