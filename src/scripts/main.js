'use strict';

// write code here
const tHead = document.querySelector('thead');
const tH = tHead.querySelectorAll('th');

const tBody = document.querySelector('tbody');
const tBodyData = [...tBody.rows];

function usdNum(str) {
  return Number(str.replace(/\D/g, ''));
}

tHead.addEventListener('click', (ev) => {
  const sortByIndex = [...tH].indexOf(ev.target);

  tBodyData.sort((a, b) => {
    const aIn = a.cells[sortByIndex].innerText;
    const bIn = b.cells[sortByIndex].innerText;

    return usdNum(aIn) - usdNum(bIn)
      || aIn.localeCompare(bIn);
  });

  tBody.append(...tBodyData);
});
