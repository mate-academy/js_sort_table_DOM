'use strict';

const thead = document.querySelector('thead');
const th = thead.querySelectorAll('th');
const tbody = document.querySelector('tbody');

th.forEach((element, index) => {
  element.addEventListener('click', () => {
    const newArr = Array.from(tbody.rows);

    newArr.sort((elA, elB) => {
      const elementA = elA.cells[index].textContent.trim();
      const elementB = elB.cells[index].textContent.trim();

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
