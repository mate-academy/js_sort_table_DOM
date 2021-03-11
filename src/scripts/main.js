'use strict';

// write code here

const thead = document.querySelector('thead');
const tbody = document.querySelector('tbody');
const arrOfEmployees = [...document.querySelectorAll('tbody > tr')];

thead.addEventListener('click', (e) => {
  const indexOfElement = e.target.cellIndex;

  arrOfEmployees.sort((prew, next) => {
    let firstElement = prew.children[indexOfElement].textContent;
    let secondElement = next.children[indexOfElement].textContent;

    if (firstElement.includes('$')) {
      const regexp = new RegExp(/[^0-9]/g);

      firstElement = firstElement.replace(regexp, '');
      secondElement = secondElement.replace(regexp, '');
    }

    return isNaN(firstElement)
      ? firstElement.localeCompare(secondElement)
      : firstElement - secondElement;
  });

  tbody.append(...arrOfEmployees);
});
