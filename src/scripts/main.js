'use strict';

const thead = document.querySelector('thead');
const tbody = document.querySelector('tbody');

thead.addEventListener('click', e => {
  const index = e.target.cellIndex;
  const childs = Array.from(tbody.children);

  childs.sort(function(a, b) {
    const comparePart1 = a.children[index].innerText;
    const comparePart2 = b.children[index].innerText;

    if (comparePart1[0] === '$') {
      const prev = parseFloat(comparePart1.slice(1));
      const next = parseFloat(comparePart2.slice(1));

      return Number(prev) - Number(next);
    }

    return comparePart1.localeCompare(comparePart2);
  });

  for (const childRow of childs) {
    tbody.append(childRow);
  }
});
