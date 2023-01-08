'use strict';

// write code here

const thead = document.querySelector('thead');
const tbody = document.querySelector('tbody');

thead.addEventListener('click', (ev) => {
  const element = ev.target.innerHTML;
  const indx = ev.target.cellIndex;
  const copy = [...tbody.children];
  const toNum = el => el.slice(1).split(',').join('');

  copy.sort((a, b) => {
    switch (element) {
      case 'Name':
      case 'Position':
        return a.cells[indx].innerHTML.localeCompare(b.cells[indx].innerHTML);

      case 'Age':
        return a.cells[indx].innerHTML - b.cells[indx].innerHTML;

      case 'Salary':
        return toNum(a.cells[indx].innerHTML) - toNum(b.cells[indx].innerHTML);

      default:
        return;
    };
  });

  tbody.append(...copy);
});
