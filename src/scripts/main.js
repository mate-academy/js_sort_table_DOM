'use strict';

const selectorTop = document.querySelector('tr');
const tBody = document.querySelector('tbody');

let arrToSort = [...document.querySelectorAll('tr')];

arrToSort = arrToSort.slice(1, -1);

const parseSalary = (string) => {
  return parseFloat(string.substring(1).replace(',', ''));
};

for (let i = 0; i < selectorTop.childElementCount; i++) {
  selectorTop.children[i].addEventListener('click', (e) => {
    arrToSort.sort((a, b) => {
      const firstEl = a.children[i].innerHTML;
      const secondEl = b.children[i].innerHTML;
      let compareResult = firstEl.localeCompare(secondEl);

      if (selectorTop.children[i].textContent === 'Salary') {
        compareResult = parseSalary(firstEl) - parseSalary(secondEl);
      };

      return compareResult;
    });

    tBody.append(...arrToSort);
  });
}
