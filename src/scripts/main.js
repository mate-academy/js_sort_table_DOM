'use strict';

const heading = document.querySelector('thead');
const content = document.querySelector('tbody');

heading.addEventListener('click', (e) => {
  const index = e.target.cellIndex;

  [...content.children]
    .sort((a, b) => {
      const x = a.cells[index].textContent;
      const y = b.cells[index].textContent;

      return toCompare(x, y);
    })
    .forEach(item => content.append(item));

  function toDigit(elem) {
    return +elem.replace(/[,$]/g, '');
  }

  function toCompare(x, y) {
    switch (index) {
      case 0:
      case 1:
        return x.localeCompare(y);
      case 2:
        return x - y;
      case 3:
        return toDigit(x) - toDigit(y);
      default:
        return 0;
    };
  }
});
