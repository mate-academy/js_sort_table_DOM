'use strict';

const tbody = document.querySelector('tbody');
const thead = document.querySelector('thead');
const tbodyRows = [...tbody.rows];

thead.addEventListener('click', (e) => {
  return sortRows(e.target.innerText);
});

function sortRows(title) {
  switch (title) {
    case 'Name':
      sortText(0);
      break;

    case 'Position':
      sortText(1);
      break;

    case 'Age':
      sortNumber(2);
      break;

    case 'Salary':
      sortSalary(3);
      break;

    default:
      render(tbodyRows);
  }

  return render(tbodyRows);
}

function sortText(n) {
  return tbodyRows.sort((prev, next) =>
    prev.cells[n].innerText.localeCompare(next.cells[n].innerText));
}

function sortNumber(n) {
  return tbodyRows.sort((prev, next) =>
    +prev.cells[n].innerText - +next.cells[n].innerText);
}

function sortSalary(n) {
  tbodyRows.map(row => (row.cells[3].innerText
    = +(row.cells[3].innerText.slice(1).replace(',', ''))));

  sortNumber(n);

  tbodyRows.map(row => (row.cells[3].innerText = '$'
    + row.cells[3].innerText.toLocaleString('en')));

  return tbodyRows;
}

function render(newRows) {
  for (let i = 0; i < tbodyRows.length; i++) {
    tbody.append(newRows[i]);
  }
}
