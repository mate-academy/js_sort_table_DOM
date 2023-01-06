'use strict';

// write code here

const thead = document.querySelector('thead');
const tbody = document.querySelector('tbody');

thead.addEventListener('click', (ev) => {
  const element = ev.target.innerHTML;
  const indx = ev.target.cellIndex;
  const copy = [...tbody.children];
  const toNum = el => el.slice(1).split(',').join('');

  switch (element) {
    case 'Name':
    case 'Position':
      copy.sort((a, b) => {
        return a.cells[indx].innerHTML.localeCompare(b.cells[indx].innerHTML);
      });
      break;

    case 'Age':
      copy.sort((a, b) => {
        return b.cells[indx].innerHTML - a.cells[indx].innerHTML;
      });
      break;

    case 'Salary':
      copy.sort((a, b) => {
        return toNum(b.cells[indx].innerHTML) - toNum(a.cells[indx].innerHTML);
      });
      break;

    default:
      return;
  }

  tbody.append(...copy);
});
