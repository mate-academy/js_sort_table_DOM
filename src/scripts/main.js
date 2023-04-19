'use strict';

const head = document.querySelector('thead');
const table = document.querySelector('tbody');

head.addEventListener('click', (e) => {
  const index = e.target.cellIndex;
  const data = [...table.children];

  data.sort((a, b) => {
    const contentA = a.cells[index].textContent;
    const contentB = b.cells[index].textContent;
    const type = e.target.textContent;

    switch (type) {
      case 'Name':
      case 'Position':
        return contentA.localeCompare(contentB);

      case 'Age':
        return contentA - contentB;

      case 'Salary':
        const normalize = (item) => item.slice(1).split(',').join('');

        return normalize(contentA) - normalize(contentB);
      default:
    }
  });

  table.append(...data);
});
