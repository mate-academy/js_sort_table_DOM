'use strict';

// write code here
const header = document.querySelector('thead');
const tbody = document.querySelector('tbody');
const th = header.getElementsByTagName('th');
const tr = tbody.getElementsByTagName('tr');
const headers = [];
const data = [];
const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

[...th].forEach(el => {
  headers.push(el.textContent.toLowerCase());
});

[...tr].forEach((el) => {
  const td = el.getElementsByTagName('td');

  const row = {};

  data.push(row);

  [...td].forEach((cell, index) => {
    let value = cell.textContent;

    switch (headers[index]) {
      case 'age':
        value = +value;
        break;
      case 'salary':
        value = Number(value.replace(/[^0-9.-]+/g, ''));
        break;
    }

    row[headers[index]] = value;
  });
});

header.addEventListener('click', el => {
  const item = el.target.textContent.toLowerCase();
  let sortFunc;

  switch (item) {
    default:
    case 'name':
    case 'position':
      sortFunc = (a, b) => {
        return a[item].localeCompare(b[item]);
      };
      break;
    case 'age':
    case 'salary':
      sortFunc = (a, b) => {
        return a[item] - b[item];
      };
      break;
  }

  data.sort(sortFunc);

  [...tr].forEach((row, i) => {
    const td = row.getElementsByTagName('td');

    [...td].forEach((cell, j) => {
      switch (headers[j]) {
        default:
        case 'name':
        case 'position':
        case 'age':
          cell.textContent = data[i][headers[j]];
          break;
        case 'salary':
          cell.textContent = formatter.format(data[i][headers[j]]);
          break;
      }
    });
  });
});
