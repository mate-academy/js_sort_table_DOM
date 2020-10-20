'use strict';

const thead = document.querySelector('thead');
const tbody = document.querySelector('tbody');
const people = [...tbody.children];

thead.addEventListener('click', ({ target }) => {
  const targetIndex = target.cellIndex;

  const peopleSorted = people.sort((a, b) => {
    const firstElement = a.cells[targetIndex].textContent.replace(/[,$]/g, '');
    const secondElement = b.cells[targetIndex].textContent.replace(/[,$]/g, '');

    if (!isNaN(+firstElement)) {
      return firstElement - secondElement;
    }

    return firstElement.localeCompare(secondElement);
  });

  tbody.append(...peopleSorted);
});
