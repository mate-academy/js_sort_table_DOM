'use strict';

const table = document.querySelector('table');

const getSortingFunction = (index, title) => {
  const salaryToNum = (str) => Number(str.substring(1).split(',').join(''));

  return (rowA, rowB) => {
    const valueA = rowA.cells[index].textContent;
    const valueB = rowB.cells[index].textContent;

    switch (title) {
      case 'Age':
        return +valueA - +valueB;
      case 'Salary':
        return salaryToNum(valueA) - salaryToNum(valueB);
      default:
        return valueA.localeCompare(valueB);
    }
  };
};

table.tHead.addEventListener('click', (e) => {
  const target = e.target.closest('th');

  if (target) {
    const tBody = table.tBodies[0];

    Array.from(tBody.rows)
      .sort(getSortingFunction(target.cellIndex, target.textContent))
      .forEach((row) => {
        tBody.append(row);
      });
  }
});
