'use strict';

const thead = document.querySelector('thead');
const tbody = document.querySelector('tbody');
const people = [...tbody.rows];

thead.addEventListener('click', ({ target }) => {
  const targetIndex = target.cellIndex;

  const peopleSorted = people.sort((a, b) => {
    const firstElement = removeDollar(a.cells[targetIndex].textContent);
    const secondElement = removeDollar(b.cells[targetIndex].textContent);

    if (!isNaN(+firstElement)) {
      return firstElement - secondElement;
    }

    return firstElement.localeCompare(secondElement);
  });

  tbody.append(...peopleSorted);
});

function removeDollar(item) {
  return item.replace(/[,$]/g, '');
}
