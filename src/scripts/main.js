'use strict';

const td = document.querySelectorAll('td');
const arr = {};
let counter = 0;

for (let i = 0; i < td.length / 4; i++) {
  createRows(i, counter, counter + 4);
  counter += 4;
}

document.addEventListener('click', (e) => {
  if (e.target.textContent === 'Name') {
    sortTable(0);
  } else if (e.target.textContent === 'Position') {
    sortTable(1);
  } else if (e.target.textContent === 'Age') {
    sortTable(2);
  } else if (e.target.textContent === 'Salary') {
    sortTable(3);
  }
});

function createRows(rowNumber, start, end) {
  arr[rowNumber] = [];

  for (let i = start; i < end; i++) {
    arr[rowNumber].push(td[i]);
  }
}

function sortTable(index) {
  const array = [];

  for (const k in arr) {
    array.push(arr[k]);
  }

  array.sort((a, b) => {
    let first = a[index].textContent;
    let second = b[index].textContent;

    if (index === 3) {
      first = parseFloat(first.replace(/[^0-9.-]+/g, '')) || 0;
      second = parseFloat(second.replace(/[^0-9.-]+/g, '')) || 0;
    }

    if (first < second) {
      return -1;
    }

    if (first > second) {
      return 1;
    }

    return 0;
  });

  const par = td[0].parentElement.parentElement;

  par.innerHTML = '';

  array.forEach((row) => {
    const tr = document.createElement('tr');

    row.forEach((cell) => tr.appendChild(cell));
    par.appendChild(tr);
  });
}
