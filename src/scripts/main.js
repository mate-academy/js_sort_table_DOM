'use strict';

// write code here
const table = document.querySelector('table');

const theads = [...table.tHead.rows[0].cells];
const tRows = [...table.tBodies[0].rows];

for (const thead of theads) {
  thead.addEventListener('click', sortByColumn);
}

function sortByColumn(e) {
  const idx = theads.findIndex((elem) => elem === e.currentTarget);

  tRows.sort((a, b) => {
    let first = a.cells[idx].innerText;
    let second = b.cells[idx].innerText;

    if (first.startsWith('$')) {
      first = formatSalary(first);
      second = formatSalary(second);

      return first - second;
    }

    return first.localeCompare(second);
  });

  for (const tr of tRows) {
    table.tBodies[0].appendChild(tr);
  }
}

function formatSalary(salary) {
  return +salary.slice(1).split(',').join('');
}
