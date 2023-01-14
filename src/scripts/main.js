'use strict';

// write code here
const table = document.querySelector('table');
const rows = [...table.tBodies[0].rows];
const header = table.tHead;
const getSalaryNumber = (salary) => {
  return Number(salary
    .slice(1)
    .replace(',', ''));
};

header.addEventListener('click', (e) => {
  rows.sort((a, b) => {
    const columnName = e.target.innerText;
    const index = [...header.rows[0].cells].findIndex(
      cell => cell.innerText === columnName);
    const comparedValueA = a.cells[index].innerText;
    const comparedValueB = b.cells[index].innerText;

    if (columnName === 'Salary') {
      return getSalaryNumber(comparedValueA)
        - getSalaryNumber(comparedValueB);
    }

    if (typeof comparedValueA === 'string') {
      return comparedValueA.localeCompare(comparedValueB);
    }

    return comparedValueA - comparedValueB;
  });

  rows.forEach(row => table.tBodies[0].append(row));
});
