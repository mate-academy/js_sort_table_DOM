'use strict';

// write code here
const table = document.querySelector('table');
const header = table.tHead;
const getSalaryNumber = salary => +(salary
  .slice(1)
  .replace(',', ''));

header.addEventListener('click', (e) => {
  const rows = [...table.tBodies[0].rows];

  rows.sort((a, b) => {
    const columnName = e.target.innerText;
    const index = e.target.cellIndex;
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

