'use strict';

const table = document.querySelector('table');
const tableHead = table.tHead;
const tableBody = table.tBodies[0];

const sortRows = function (a, b) {
  const aValue = a.children[this.index].textContent;
  const bValue = b.children[this.index].textContent;

  if (aValue.includes('$')) {
    return parseSalary(aValue) - parseSalary(bValue);
  }

  if (isNaN(aValue)) {
    return aValue.localeCompare(bValue);
  }

  return aValue - bValue;
};

const parseSalary = (str) => {
  return +str.slice(1).split(',').join('');
};

[...tableHead.rows[0].children].forEach((header) => {
  header.addEventListener('click', (e) => {
    const index = [...tableHead.rows[0].children].findIndex(
      (row) => row === e.target,
    );

    const sortRowsByIndex = sortRows.bind({ index });

    const sortedRows = [...tableBody.rows].sort(sortRowsByIndex);

    sortedRows.forEach((row) => tableBody.appendChild(row));
  });
});
