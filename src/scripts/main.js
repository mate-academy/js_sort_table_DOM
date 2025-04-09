'use strict';

const columnTitles = document.querySelector('thead');

columnTitles.addEventListener('click', (e) => {
  const rows = [...document.querySelectorAll('tbody tr')];

  switch (e.target.textContent) {
    case 'Name': {
      textSort(rows, 0, 'text');
      break;
    }

    case 'Position': {
      textSort(rows, 1, 'text');
      break;
    }

    case 'Age': {
      textSort(rows, 2, 'number');
      break;
    }

    default: {
      textSort(rows, 3, 'salary');
      break;
    }
  }
});

function textSort(rows, ind, type) {
  rows.sort((r1, r2) => {
    const cells1 = r1.querySelectorAll('td');
    const cells2 = r2.querySelectorAll('td');
    const value1 = cells1[ind].textContent;
    const value2 = cells2[ind].textContent;

    if (type === 'text') {
      return value1.trim().localeCompare(value2.trim());
    }

    if (type === 'number') {
      return value1 - value2;
    }

    if (type === 'salary') {
      return parseSalary(value1) - parseSalary(value2);
    }
  });

  rows.forEach((row) => {
    document.querySelector('tbody').appendChild(row);
  });
}

function parseSalary(salaryStr) {
  return parseInt(salaryStr.replace(/[^0-9.-]+/g, ''));
}
