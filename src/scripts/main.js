'use strict';

const table = document.querySelector('table');
const ths = [...table.tHead.firstElementChild.children];

function normalize(stringSalary) {
  return +stringSalary.split(',').join('').slice(1);
}

function sortBySalary(list) {
  list.sort((a, b) => {
    return normalize(a) - normalize(b);
  });

  return list;
}

table.addEventListener('click', (e) => {
  if (ths.includes(e.target)) {
    const thIndex = ths.indexOf(e.target);
    const rows = table.tBodies[0].rows;

    const column = [...rows].map((row) => row.children[thIndex].textContent);

    if (ths[thIndex].textContent === 'Salary') {
      sortBySalary(column);
    } else {
      column.sort();
    }

    let cellCount = 0;

    for (const row of rows) {
      row.children[thIndex].textContent = column[cellCount++];
    }
  }
});
