'use strict';

// write code here
const tHead = document.querySelector('thead');
const tBody = document.querySelector('tbody');
const rows = tBody.querySelectorAll('tr');

tHead.addEventListener('click', (events) => {
  const index = events.target.cellIndex;
  const sorted = [...rows];

  if (index === 0 || index === 1) {
    sorted.sort((a, b) => {
      return a.cells[index].textContent.localeCompare(
        b.cells[index].textContent);
    });
  }

  if (index === 2 || index === 3) {
    sorted.sort((a, b) => {
      const elementA = a.cells[index].textContent.split(',').join('').slice(1);
      const elementB = b.cells[index].textContent.split(',').join('').slice(1);

      return elementA - elementB;
    });
  }

  tBody.append(...sorted);
});
