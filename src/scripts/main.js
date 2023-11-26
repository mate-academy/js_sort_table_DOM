'use strict';

const tBody = document.querySelector('tbody');
const thElemArr = document.querySelectorAll('th');
const filterArea = document.querySelector('thead');
const trElem = tBody.querySelectorAll('tr');

filterArea.addEventListener('click', e => {
  if (e.target.tagName !== 'TH') {
    return;
  }

  const index = [...thElemArr].indexOf(e.target);

  const sorted = [...trElem].sort((a, b) => {
    const elemA = a.cells[index].innerText.replace('$', '').replace(',', '');
    const elemB = b.cells[index].innerText.replace('$', '').replace(',', '');

    if (!isNaN(elemA) || elemA[0] === '$') {
      return elemA - elemB;
    }

    return elemA.localeCompare(elemB);
  });

  tBody.append(...sorted);
});
