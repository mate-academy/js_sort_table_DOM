'use strict';

// write code here

const row = document.querySelectorAll('tbody > tr');
const tBody = document.querySelector('tbody');
const tHead = document.querySelector('thead');
const tH = tHead.querySelectorAll('th');
const rowList = [...row];

function toNum(num) {
  if (num[0] === '$') {
    return num.slice(1).split(',').join('');
  }

  return num;
}

tHead.addEventListener('click', e => {
  const indexTh = [...tH].indexOf(e.target);

  rowList.sort((a, b) => {
    const nameA = a.children[indexTh].textContent;
    const nameB = b.children[indexTh].textContent;

    return toNum(nameA) - toNum(nameB) || nameA.localeCompare(nameB);
  });

  tBody.append(...rowList);
});
