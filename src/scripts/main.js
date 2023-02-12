'use strict';

const table = document.querySelector('table');
const headers = [...document.querySelector('thead tr').children];
const rows = [...table.children[1].children];

function normalizeSalary(salary) {
  return salary.replace('$', '').replace(',', '');
}

function sortValues(a, b) {
  if (a[0] === '$') {
    const cleanA = normalizeSalary(a);
    const cleanB = normalizeSalary(b);

    return cleanA - cleanB;
  }

  if (isNaN(+a)) {
    return a.localeCompare(b);
  }

  return a - b;
}

table.addEventListener('click', e => {
  const selectedHeader = e.target.innerText;
  const headerIndex = headers.findIndex(header => {
    return header.innerText === selectedHeader;
  });

  const cellValues = rows.map(element => {
    const cell = element.children[headerIndex];
    const text = cell.innerText;

    cell.remove();

    return text;
  });

  cellValues.sort(sortValues);

  cellValues.forEach((element, index) => {
    const prevCell = rows[index].children[headerIndex - 1];
    const currentRow = rows[index];
    const newCell = document.createElement('td');

    newCell.innerText = cellValues[index];

    if (headerIndex === 0) {
      currentRow.prepend(newCell);
    } else {
      prevCell.after(newCell);
    }
  });
});
