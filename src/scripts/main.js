'use strict';

const tbody = document.querySelector('tbody');
const theadList = [...document.querySelector('thead tr').children];
const rows = [...tbody.rows];

document.body.addEventListener('click', e => {
  const index = theadList.indexOf(e.target);

  function salaryToNumber(sal) {
    return +sal.slice(1).split(',').join('');
  };

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
