'use strict';

const thead = document.querySelector('thead');
const tbody = document.querySelector('tbody');
const people = [...tbody.children];

thead.addEventListener('click', event => {
  const cellIndex = event.target.cellIndex;

  const peopleSorted = people.sort((a, b) => {
    const firstElement = a.cells[cellIndex].textContent.replace(/[,$]/g, '');
    const secondElement = b.cells[cellIndex].textContent.replace(/[,$]/g, '');

    if (!isNaN(+firstElement)) {
      return firstElement - secondElement;
    }

    return firstElement.localeCompare(secondElement);
  });

  tbody.append(...peopleSorted);
});
