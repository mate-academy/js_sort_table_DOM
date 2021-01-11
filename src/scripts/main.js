'use strict';

const headers = [...document.querySelector('thead').children[0].children];
const tableBody = document.querySelector('tbody');
const rows = [...tableBody.children];

document.addEventListener('click', (e) => {
  if (!headers.includes(e.target.closest('th'))) {
    return;
  }

  let sorted = [];

  if (e.target.textContent === 'Salary') {
    if (!document.moneyIncrease) {
      sorted = rows.sort((a, b) => {
        return toNum(a, e.target.cellIndex) - toNum(b, e.target.cellIndex);
      });
      document.moneyIncrease = true;
    } else {
      sorted = rows.sort((a, b) => {
        return toNum(b, e.target.cellIndex) - toNum(a, e.target.cellIndex);
      });
      document.moneyIncrease = false;
    }
  }

  if (e.target.textContent === 'Age') {
    if (!document.ageIncrease) {
      sorted = rows.sort((a, b) => {
        return +a.children[2].textContent - +b.children[2].textContent;
      });
      document.ageIncrease = true;
    } else {
      sorted = rows.sort((a, b) => {
        return +b.children[2].textContent - +a.children[2].textContent;
      });
      document.ageIncrease = false;
    }
  }

  if (e.target.textContent === 'Position') {
    if (!document.positionIncrease) {
      sorted = rows.sort((a, b) => {
        return textCompare(a, b, e.target.cellIndex, document.positionIncrease);
      });
      document.positionIncrease = true;
    } else {
      sorted = rows.sort((a, b) => {
        return textCompare(a, b, e.target.cellIndex, document.positionIncrease);
      });
      document.positionIncrease = false;
    }
  }

  if (e.target.textContent === 'Name') {
    if (!document.nameIncrease) {
      sorted = rows.sort((a, b) => {
        return textCompare(a, b, e.target.cellIndex, document.nameIncrease);
      });
      document.nameIncrease = true;
    } else {
      sorted = rows.sort((a, b) => {
        return textCompare(a, b, e.target.cellIndex, document.nameIncrease);
      });
      document.nameIncrease = false;
    }
  }

  tableBody.append(...sorted);
});

function toNum(cell, n) {
  return parseInt(cell.children[n].textContent.slice(1));
}

function textCompare(a, b, n, decrease) {
  if (decrease) {
    return b.children[n].textContent.localeCompare(a.children[n].textContent);
  }

  return a.children[n].textContent.localeCompare(b.children[n].textContent);
}
