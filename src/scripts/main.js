'use strict';

const sortList = document.querySelector('thead');
const bodyList = document.querySelector('tbody');
const rows = [...bodyList.rows];

sortList.addEventListener('click', (e) => {
  const cellInd = e.target.cellIndex;

  if (e.target.innerText === 'Salary') {
    rows.sort((a, b) => {
      return pars(a.cells[cellInd].innerHTML)
         - pars(b.cells[cellInd].innerHTML);
    });
  } else {
    rows.sort((a, b) => {
      return a.cells[cellInd].innerHTML > b.cells[cellInd].innerHTML ? 1 : -1;
    });
  }

  bodyList.append(...rows);

  function pars(item) {
    return +(item.replace('$', '').split(',').join(''));
  }
});
