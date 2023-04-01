'use strict';

const thead = document.querySelector('thead');
const trList = [...document.querySelectorAll('tbody > tr')];

const convertToNum = str => str.includes('$')
  ? +(str.slice(1).replace(',', ''))
  : str;

thead.addEventListener('click', e => {
  const headIndex = e.target.cellIndex;

  trList.sort((a, b) => {
    const curr = a.children[headIndex].textContent;
    const next = b.children[headIndex].textContent;

    if (headIndex === 0 || headIndex === 1) {
      return curr.localeCompare(next);
    }

    return convertToNum(curr) - convertToNum(next);
  });

  thead.nextElementSibling.append(...trList);
});
