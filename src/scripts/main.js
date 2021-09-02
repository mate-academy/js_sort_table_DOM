'use strict';

// write code here
const sortList = document.querySelector('thead');
const bodyList = document.querySelector('tbody');
const sorted = [...bodyList.rows];

sortList.addEventListener('click', (ev) => {
  const cellInd = ev.target.cellIndex;

  if (ev.target.innerText === 'Salary') {
    sorted.sort((a, b) => {
      return pars(a.cells[cellInd].innerHTML)
       - pars(b.cells[cellInd].innerHTML);
    });
  } else {
    sorted.sort((a, b) => {
      return a.cells[cellInd].innerHTML > b.cells[cellInd].innerHTML ? 1 : -1;
    });
  }

  bodyList.append(...sorted);

  function pars(item) {
    return +(item.replace('$', '').split(',').join(''));
  }
});
