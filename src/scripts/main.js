'use strict';

const tHead = document.querySelector('thead');
const tBody = document.querySelector('tbody');
const trArray = [...tBody.children];

tHead.addEventListener('click', e => {
  if (!e.target.tagName === 'TH') {
    return;
  }

  const targetIndex = e.target.closest('th').cellIndex;

  const sortedArr = trArray.sort((a, b) => {
    const first = a.children[targetIndex].innerText.replace(/[$,]/g, '');
    const second = b.children[targetIndex].innerText.replace(/[$,]/g, '');

    if (!isNaN(first)) {
      return first - second;
    }

    return first.localeCompare(second);
  });

  tBody.append(...sortedArr);
});
