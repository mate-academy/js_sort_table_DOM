'use strict';

const headers = [...document.querySelector('thead').children[0].children];
const tableBody = document.querySelector('tbody');
const rows = [...tableBody.children];

document.addEventListener('click', (e) => {
  if (!headers.includes(e.target.closest('th'))) {
    return;
  }

  let sorted = [];

  switch (e.target.cellIndex) {
    case 3:
      sorted = rows.sort((a, b) => {
        return numCompare(
          toNum(a, e.target.cellIndex),
          toNum(b, e.target.cellIndex),
          document.moneyIncrease
        );
      });

      if (!document.moneyIncrease) {
        document.moneyIncrease = true;
      } else {
        document.moneyIncrease = false;
      }

      break;

    case 2:
      sorted = rows.sort((a, b) => {
        return numCompare(
          toNum(a, e.target.cellIndex),
          toNum(b, e.target.cellIndex),
          document.ageIncrease
        );
      });

      if (!document.ageIncrease) {
        document.ageIncrease = true;
      } else {
        document.ageIncrease = false;
      }

      break;

    case 1:
      sorted = rows.sort((a, b) => {
        return textCompare(
          a,
          b,
          e.target.cellIndex,
          document.positionIncrease
        );
      });

      if (!document.positionIncrease) {
        document.positionIncrease = true;
      } else {
        document.positionIncrease = false;
      }

      break;

    case 0:
      sorted = rows.sort((a, b) => {
        return textCompare(
          a,
          b,
          e.target.cellIndex,
          document.nameIncrease
        );
      });

      if (!document.nameIncrease) {
        document.nameIncrease = true;
      } else {
        document.nameIncrease = false;
      }

      break;

    default:
      break;
  }

  tableBody.append(...sorted);
});

function toNum(cell, n) {
  const num = cell.children[n].textContent;

  if (num.includes('$')) {
    return parseInt(cell.children[n].textContent.slice(1));
  }

  return parseInt(cell.children[n].textContent);
}

function textCompare(a, b, n, decrease) {
  if (decrease) {
    return b.children[n].textContent.localeCompare(a.children[n].textContent);
  }

  return a.children[n].textContent.localeCompare(b.children[n].textContent);
}

function numCompare(a, b, decrease) {
  if (decrease) {
    return b - a;
  }

  return a - b;
}
