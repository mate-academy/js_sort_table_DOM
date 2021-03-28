'use strict';

const tr = document.querySelectorAll('tbody tr');
const thead = document.querySelector('thead');
const tbody = document.querySelector('tbody');

thead.addEventListener('click', (e) => {
  const sorted = Array.from(tr).sort((tdA, tdB) => {
    const prev = tdA.children[e.target.cellIndex].textContent;
    const curr = tdB.children[e.target.cellIndex].textContent;

    return !isNaN(transformToNum(prev))
      ? transformToNum(prev) - transformToNum(curr)
      : prev.localeCompare(curr);
  });

  tbody.append(...sorted);
});

function transformToNum(str) {
  return +str.replace(/[$,]/g, '');
}
