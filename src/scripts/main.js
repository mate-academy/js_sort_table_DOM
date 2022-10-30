'use strict';

const tbody = document.querySelector('tbody');
const rows = [...tbody.children];

const columnIndex = {
  Name: 0,
  Position: 1,
  Age: 2,
  Salary: 3,
};

document.querySelector('thead').addEventListener('click', e => {
  switch (e.target.textContent) {
    case 'Name':
      sortTable(columnIndex.Name);
      break;
    case 'Position':
      sortTable(columnIndex.Position);
      break;
    case 'Age':
      sortTable(columnIndex.Age);
      break;
    case 'Salary':
      sortTable(columnIndex.Salary);
      break;
    default:
      throw new Error('Unknown step');
  }
});

function sortTable(column) {
  rows.sort(function(a, b) {
    if (column === columnIndex.Salary) {
      return Normalize(a.children[column].textContent)
           - Normalize(b.children[column].textContent);
    }

    if (column === columnIndex.Age) {
      return a.children[column].textContent
      - b.children[column].textContent;
    }

    return a.children[column].textContent
      .localeCompare(b.children[column].textContent);
  }
  );
  tbody.append(...rows);
}

function Normalize(salary) {
  return +salary.replace(/[^0-9.-]+/g, '');
}
