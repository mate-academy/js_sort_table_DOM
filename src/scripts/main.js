'use strict';

// write code here

const theadTh = document.querySelectorAll('thead th');
const tbody = document.querySelector('tbody');

theadTh.forEach((th, index) => {
  th.addEventListener('click', () => {
    const rows = [...tbody.querySelectorAll('tr')];

    rows.sort((r1, r2) => {
      const v1 = r1.children[index].textContent.trim();
      const v2 = r2.children[index].textContent.trim();

      if (v1[0] === '$') {
        const replacedV1 = v1.replace(/[$, ]/g, '').trim();
        const replacedV2 = v2.replace(/[$, ]/g, '').trim();

        return +replacedV1 - +replacedV2;
      } else if (!isNaN(+v1)) {
        return +v1 - +v2;
      } else {
        return v1.localeCompare(v2);
      }
    });

    tbody.append(...rows);
  });
});
