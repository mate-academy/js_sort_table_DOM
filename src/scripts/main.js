'use strict';

const header = document.querySelector('thead');
const body = document.querySelector('tbody');
const bodyCells = body.querySelectorAll('tr');

header.addEventListener('click', (ev) => {
  const indexTitle = ev.target.cellIndex;

  const sortedCells = [...bodyCells]
    .sort((x, y) => {
      const innerTextX = x.children[indexTitle].innerText;
      const innerTextY = y.children[indexTitle].innerText;

      switch (indexTitle) {
        case 0:
        case 1:
          return innerTextX.localeCompare(innerTextY);

        case 2:
          return +innerTextX - +innerTextY;

        case 3:
          return +innerTextX.slice(1) - +innerTextY.slice(1);

        default:
          return 0;
      }
    });

  sortedCells.forEach(item => {
    return body.append(item);
  });
});
