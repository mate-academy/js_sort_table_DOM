'use strict';

const title = document.querySelector('thead');
const people = document.querySelector('tbody');

function convertToNumber(value) {
  return +value.split(',').join('').slice(1);
};

title.addEventListener('click', (e) => {
  const cellIndex = e.target.cellIndex;
  const data = [...people.children];

  data.sort((a, b) => {
    const first = a.children[cellIndex].textContent;
    const second = b.children[cellIndex].textContent;

    if (cellIndex === 3) {
      return convertToNumber(first) - convertToNumber(second);
    }

    if (cellIndex === 2) {
      return first - second;
    }

    if (cellIndex === 0 || cellIndex === 1) {
      return first.localeCompare(second);
    }
  });

  people.append(...data);
});
