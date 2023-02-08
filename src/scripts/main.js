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

    switch (cellIndex) {
      case 3:
        return convertToNumber(first) - convertToNumber(second);

      case 2:
        return first - second;

      case 0:
      case 1:
        return first.localeCompare(second);

      default:
        return 'default';
    }
  });

  people.append(...data);
});
