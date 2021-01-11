'use strict';

const heading = document.querySelector('thead');
const content = document.querySelector('tbody');

heading.addEventListener('click', (e) => {
  const index = e.target;

  [...content.children]
    .sort((a, b) => {
      const x = a.cells[index.cellIndex].textContent;
      const y = b.cells[index.cellIndex].textContent;

      return toCompare(x, y, index);
    })
    .forEach(item => content.append(item));
});

function toCompare(x, y, index) {
  switch (index.innerText) {
    case 'Name':
    case 'Position':
      return x.localeCompare(y);
    case 'Age':
      return x - y;
    case 'Salary':
      return toDigit(x) - toDigit(y);
    default:
      return 0;
  };
}

function toDigit(elem) {
  return +elem.replace(/[,$]/g, '');
}
