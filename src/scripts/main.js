'use strict';

const head = document.querySelectorAll('thead th');
const tbody = document.querySelector('tbody');

for (let i = 0; i < head.length; i++) {
  head[i].addEventListener('click', () => {
    const rowsArray = Array.from(tbody.querySelectorAll('tr'));

    rowsArray.sort((rowA, rowB) => {
      const textA = rowA.children[i].textContent;
      const textB = rowB.children[i].textContent;

      if (i < 2) {
        if (textA > textB) return 1;
        if (textA < textB) return -1;
        return 0;
      }

      if (i === 2) {
        return Number(textA) - Number(textB);
      }

      if (i === 3) {
        return toNumber(textA) - toNumber(textB);
      }
    });

    tbody.append(...rowsArray);
  });
}

function toNumber(text) {
  const cleanText = text.slice(1).split(',').join('');
  return Number(cleanText);
}
