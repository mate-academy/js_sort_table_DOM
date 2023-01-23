'use strict';

const tbody = document.querySelector('tbody');

const thead = document.querySelector('thead');

thead.addEventListener('click', e => {
  const cell = e.target.cellIndex;

  const sortedArray = [...tbody.children]
    .sort((a, b) => {
      const stringOne = a.cells[cell].innerText;
      const stringTwo = b.cells[cell].innerText;

      if (stringOne.includes('$')) {
        const numberOne = stringOne.replace(/[$,]/g, '');
        const numberTwo = stringTwo.replace(/[$,]/g, '');

        return numberOne - NumberTwo;
      }

      return stringOne.localeCompare(stringTwo);
    });

  tbody.append(...sortedArray);
});
