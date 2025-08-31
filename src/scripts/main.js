'use strict';

const tHead = document.querySelector('thead');
const tBody = document.querySelector('tbody');

tHead.addEventListener('click', (e) => {
  const el = e.target;
  const allTh = tHead.querySelectorAll('th');

  if (el.tagName === 'TH') {
    const thPosition = [...allTh].indexOf(el);
    // 0-Name,1-Position,2-Age,3-Salary;

    const allTrBody = tBody.querySelectorAll('tr');
    const allTrArray = [...allTrBody];

    allTrArray.sort((a, b) => {
      const elA = a.querySelectorAll('td')[thPosition].textContent;
      const elB = b.querySelectorAll('td')[thPosition].textContent;
      const clearA = elA.replace(/[$,]/g, '');
      const clearB = elB.replace(/[$,]/g, '');

      if (!isNaN(Number(clearA)) && !isNaN(Number(clearB))) {
        return Number(clearA) - Number(clearB);
      } else {
        return elA.localeCompare(elB);
      }
    });

    tBody.append(...allTrArray);
  }
});
