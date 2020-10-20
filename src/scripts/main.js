'use strict';

const thead = document.querySelector('thead');
const tbody = document.querySelector('tbody');
const people = [...tbody.children];

thead.addEventListener('click', ({ target }) => {
  const targetIndex = target.cellIndex;

  const peopleSorted = people.sort((a, b) => {
    const firstElement = textContent(a);
    const secondElement = textContent(b);

    if (!isNaN(+firstElement)) {
      return firstElement - secondElement;
    }

    return firstElement.localeCompare(secondElement);
  });

  function textContent(item) {
    return item.cells[targetIndex].textContent.replace(/[,$]/g, '');
  }

  tbody.append(...peopleSorted);
});
