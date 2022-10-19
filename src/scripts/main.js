'use strict';

const tbody = document.querySelector('tbody');
const theadList = [...document.querySelector('thead tr').children];
const rows = [...tbody.rows];
const table = document.querySelector('table');

function salaryToNumber(sal) {
  return +sal.slice(1).split(',').join('');
};

table.addEventListener('click', e => {
  const index = theadList.indexOf(e.target);

  if (e.target.tagName !== 'TH') {
    return;
  };

  rows.sort((a, b) => {
    const elementA = a.cells[index].textContent;
    const elementB = b.cells[index].textContent;

    if (e.target.textContent === 'Salary') {
      return salaryToNumber(elementA) - salaryToNumber(elementB);
    }

    return elementA.localeCompare(elementB);
  });

  tbody.append(...rows);
});
