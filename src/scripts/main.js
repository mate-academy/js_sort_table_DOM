'use strict';

const headers = document.querySelectorAll('th');
const body = document.querySelector('tbody');

let order = 'ASC';
let column = '';

headers.forEach((header) => {
  header.addEventListener('click', () => {
    sortByHeaderName(header.textContent);
  });
});

function sortByHeaderName(headerName) {
  const lines = [...body.children];

  let newOrder = [];

  switch (headerName) {
    case 'Name': {
      if (headerName !== column && order === 'DESC') {
        order = 'ASC';
      }
      column = headerName;
      newOrder = sortLine(0, lines, order);
      break;
    }

    case 'Position': {
      if (headerName !== column && order === 'DESC') {
        order = 'ASC';
      }
      column = headerName;

      newOrder = sortLine(1, lines, order);
      break;
    }

    case 'Age': {
      if (headerName !== column && order === 'DESC') {
        order = 'ASC';
      }
      column = headerName;
      newOrder = sortLine(2, lines, order);
      break;
    }

    case 'Salary': {
      if (headerName !== column && order === 'DESC') {
        order = 'ASC';
      }
      column = headerName;
      newOrder = sortLine(3, lines, order);
      break;
    }

    default:
      newOrder = lines;
  }

  body.innerHTML = '';

  if (order === 'ASC') {
    order = 'DESC';
  } else {
    order = 'ASC';
  }

  body.append(...newOrder);
}

function sortLine(index, arr, or) {
  const dir = or === 'ASC' ? 1 : -1;

  return arr.sort((a, b) => {
    const value = [...a.children][index].textContent;
    const next = [...b.children][index].textContent;
    const valueToNum = Number(value.replace(/(\$|,)/g, ''));

    if (isNaN(valueToNum)) {
      return value.localeCompare(next) * dir;
    } else {
      return (Number(valueToNum) - Number(next.replace(/(\$|,)/g, ''))) * dir;
    }
  });
}
