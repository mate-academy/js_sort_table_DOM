'use strict';

const selectorTop = document.querySelector('tr');
const tBody = document.querySelector('tbody');

let arrToSort = [...document.querySelectorAll('tr')];

arrToSort = arrToSort.slice(1, -1);

const parseSalary = (string) => {
  return parseFloat(string.substring(1).replace(',', ''));
};

for (let i = 0; i <= 3; i++) {
  selectorTop.children[i].addEventListener('click', (e) => {
    arrToSort.sort((a, b) => {
      const firstEl = a.children[i].innerHTML;
      const secondEl = b.children[i].innerHTML;
      let compareResult = firstEl - secondEl;

      if (i === 3) {
        compareResult = parseSalary(firstEl) - parseSalary(secondEl);
      };

      if (i < 2) {
        compareResult = firstEl.localeCompare(secondEl);
      };

      return compareResult;
    });

    tBody.append(...arrToSort);
  });
}
