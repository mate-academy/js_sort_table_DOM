'use strict';

// write code here
// const thead = document.querySelector('thead');
const th = document.querySelectorAll('th');
const tbody = document.querySelector('tbody');

th.forEach((el, idx) => {
  el.addEventListener('click', () => {
    const newArr = Array.from(tbody.rows);

    newArr.sort((a, b) => {
      const elementA = a.cells[idx].textContent.trim();
      const elementB = b.cells[idx].textContent.trim();

      const resultA =
        parseFloat(elementA.replace(/[^\d.-]/g, '')) || elementA.toLowerCase();
      const resultB =
        parseFloat(elementB.replace(/[^\d.-]/g, '')) || elementB.toLowerCase();

      if (typeof resultA === 'number') {
        return resultA - resultB;
      } else {
        return resultA.localeCompare(resultB);
      }
    });

    tbody.append(...newArr);
  });
});
