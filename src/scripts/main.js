'use strict';

const tHead = document.querySelector('thead');
const tBody = document.querySelector('tbody');

const thHead = tHead.querySelectorAll('th');

thHead.forEach((th) => {
  th.addEventListener('click', (e) => {
    const clickIndex = e.target.cellIndex;
    const trBody = [...tBody.querySelectorAll('tr')];

    trBody.sort((a, b) => {
      const elemA = a.children[clickIndex].textContent.trim();
      const elemB = b.children[clickIndex].textContent.trim();

      const formatA = Number(elemA.replaceAll('$', '').replaceAll(',', ''));
      const formatB = Number(elemB.replaceAll('$', '').replaceAll(',', ''));

      if (!isNaN(formatA)) {
        return formatA - formatB;
      }

      return elemA.localeCompare(elemB);
    });

    tBody.innerHTML = '';

    trBody.forEach((row) => {
      tBody.append(row);
    });
  });
});
