'use strict';

// write code here
const headTh = document.querySelectorAll('thead th');

headTh.forEach((tag) => {
  tag.addEventListener('click', (e) => {
    const coord = e.target.cellIndex;
    const listTr = [...document.querySelectorAll('tbody tr')];

    listTr.sort((a, b) => {
      const textA = a.cells[coord].textContent;
      const textB = b.cells[coord].textContent;

      if (coord === 3) {
        const numA = Number(textA.replace(/[^\d]/g, ''));
        const numB = Number(textB.replace(/[^\d]/g, ''));

        return numA - numB;
      }

      return textA.localeCompare(textB);
    });

    document.querySelector('tbody').append(...listTr);
  });
});
