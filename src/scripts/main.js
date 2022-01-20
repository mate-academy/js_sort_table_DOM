'use strict';

// write code here
const table = document.querySelector('table');
const thead = table.querySelector('thead');
const trList = [...table.querySelectorAll('tr')];
const trListNotTh = trList.slice(1, trList.length - 1);
const headList = [...trList[0].children];

thead.addEventListener('click', (ev) => {
  const element = ev.target;

  if (element.tagName === 'TH') {
    const headName = element.textContent;
    const index = headList.findIndex(h => h.innerText === headName);

    trListNotTh.sort((a, b) => {
      const A = [...a.children][index].textContent;
      const B = [...b.children][index].textContent;

      if (A.includes('$')) {
        const tempA = A.replace(/[^0-9]/g, '');
        const tempB = B.replace(/[^0-9]/g, '');

        return Number(tempA) - Number(tempB);
      }

      if (isFinite(A)) {
        return Number(A) - Number(B);
      } else {
        return A.localeCompare(B);
      }
    });

    table.append(...trListNotTh);
  }
});
