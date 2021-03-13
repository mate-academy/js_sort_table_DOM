'use strict';

const thead = document.querySelector('thead');
const tbody = document.querySelector('tbody');
const people = [...tbody.children];

thead.addEventListener('click', event => {
  const cellIndex = event.target.cellIndex;

  const peopleSorted = people.sort((a, b) => {
    const element1 = a.cells[cellIndex].textContent.replace(/[,$]/g, '');
    const element2 = b.cells[cellIndex].textContent.replace(/[,$]/g, '');

    if (!isNaN(+element1)) {
      return element1 - element2;
    }

    return element1.localeCompare(element2);
  });

  tbody.append(...peopleSorted);
});
