'use strict';

const elementTable = document.querySelector('table');
const rowsArr = [...elementTable.tBodies[0].rows];
const headCells = [...elementTable.tHead.rows[0].cells];
const sortCollsColumns = (indexColumn, arr) => {
  arr.sort((a, b) => {
    let A = [...a.cells][indexColumn].textContent;
    let B = [...b.cells][indexColumn].textContent;

    if (headCells[indexColumn].textContent === 'Salary') {
      A = +A.replace(/\D/g, '');
      B = +B.replace(/\D/g, '');
    };

    return (A > B) ? 1 : ((A < B) ? -1 : 0);
  });

  arr.forEach((el) => {
    elementTable.appendChild(el);
  });
};

elementTable.addEventListener('click', function(e) {
  if (!this.firstElementChild.contains(e.target) || e.target.tagName !== 'TH') {
    return;
  };

  const indexHeadCall = headCells.indexOf(e.target);

  sortCollsColumns(indexHeadCall, rowsArr);
});
