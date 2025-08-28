'use strict';

const table = document.querySelector('table');
const tableHead = table.querySelector('thead');
const tableBody = table.querySelector('tbody');

const parsers = {
  salary: (val) => salaryToNum(val),
  age: (val) => +val,
  default: (val) => val.toLowerCase(),
};

tableHead.children[0].addEventListener('click', (e) => {
  if (e.target.tagName === 'TH') {
    const clickedColIndex = [...e.target.parentNode.children].indexOf(e.target);
    const key = e.target.textContent.toLowerCase().trim();
    const parser = parsers[key] || parsers.default;

    if (clickedColIndex !== -1) {
      [...tableBody.rows]
        .sort((rowA, rowB) => {
          const a = parser(cellText(rowA, clickedColIndex));
          const b = parser(cellText(rowB, clickedColIndex));

          return a > b ? 1 : a < b ? -1 : 0;
        })
        .forEach((row) => tableBody.append(row));
    }
  }
});

function salaryToNum(salary) {
  return parseInt(salary.replace(/[^\d]/g, ''), 10);
}

function cellText(row, index) {
  return [...row.children][index].textContent.trim();
}
