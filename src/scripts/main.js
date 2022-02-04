'use strict';

const thead = document.querySelector('thead');
const body = document.querySelector('tbody');
const row = body.querySelectorAll('tr');

thead.addEventListener('click', ev => {
  const index = ev.target.cellIndex;

  const filtered = [...row].sort((a, b) => {
    const firstElement = a.cells[index].textContent.replace(/\$|,/g, '');
    const secondElement = b.cells[index].textContent.replace(/\$|,/g, '');

    if (isNaN(firstElement - secondElement)) {
      return firstElement.localeCompare(secondElement);
    } else {
      return firstElement - secondElement;
    }
  });

  body.append(...filtered);
});
