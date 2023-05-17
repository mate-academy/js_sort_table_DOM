'use strict';

// write code here
const head = document.querySelector('thead');
const tbody = document.querySelector('tbody ');

const rows = tbody.querySelectorAll('tr');
const rowsArr = Array.from(rows);

const sortByName = (rowA, rowB) => {
  const strA = rowA.querySelector('td:nth-child(1)').textContent;
  const strB = rowB.querySelector('td:nth-child(1)').textContent;

  return strA.localeCompare(strB);
};

const sortByPosition = (rowA, rowB) => {
  const strA = rowA.querySelector('td:nth-child(2)').textContent;
  const strB = rowB.querySelector('td:nth-child(2)').textContent;

  return strA.localeCompare(strB);
};

const sortByNum = (rowA, rowB) => {
  const ageA = rowA.querySelector('td:nth-child(3)').textContent;
  const ageB = rowB.querySelector('td:nth-child(3)').textContent;

  return ageA - ageB;
};

const sortBySalary = (rowA, rowB) => {
  const salaryA = +rowA.querySelector('td:nth-child(4)')
    .textContent.replace(/[^0-9.-]+/g, '');
  const salaryB = +rowB.querySelector('td:nth-child(4)')
    .textContent.replace(/[^0-9.-]+/g, '');

  return salaryA - salaryB;
};

const funnctionMap = {
  'Name': sortByName,
  'Position': sortByPosition,
  'Age': sortByNum,
  'Salary': sortBySalary,
};

head.addEventListener('click', e => {
  rowsArr.sort(funnctionMap[e.target.textContent]);

  rowsArr.forEach(element => {
    tbody.append(element);
  });
});
