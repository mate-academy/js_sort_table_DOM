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

    const readyTrArray = allTrArray.map((tr, index) => {
      return {
        row: tr,
        value: tr.querySelectorAll('td')[thPosition].textContent.trim(),
        index: index,
      };
    });

    readyTrArray.sort((a, b) => {
      const valueA = a.value.replace(/[$,]/g, '');
      const valueB = b.value.replace(/[$,]/g, '');

      const numA = Number(valueA);
      const numB = Number(valueB);

      if (!isNaN(numA) && !isNaN(numB)) {
        if (numA === numB) {
          return a.index - b.index;
        } else {
          return numA - numB;
        }
      }

      return valueA.localeCompare(valueB);
    });

    tBody.append(...readyTrArray.map((obj) => obj.row));
  }
});
