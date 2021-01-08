'use strict';

const header = document.querySelector('thead');
const tableBody = document.querySelector('tbody');

header.addEventListener('click', sortTableByHeaderClick);

function sortTableByHeaderClick(ev) {
  const rows = tableBody.querySelectorAll('tr');
  const columnName = ev.target.textContent;
  let callback;

  switch (columnName) {
    case 'Age':
      callback = (a, b) => {
        const ageA = Number(a.children[2].textContent);
        const ageB = Number(b.children[2].textContent);

        return ageA - ageB;
      };
      break;

    case 'Salary':
      callback = (a, b) => {
        const salaryA = parseSalary(a.children[3].textContent);
        const salaryB = parseSalary(b.children[3].textContent);

        return salaryA - salaryB;
      };
      break;

    case 'Position':
      callback = sortStrings(1);
      break;

    default:
      callback = sortStrings(0);
  }

  [...rows].sort(callback).forEach(row => tableBody.append(row));
}

function parseSalary(str) {
  return Number(str.slice(1).split(',').join(''));
}

function sortStrings(index) {
  return (a, b) => {
    const textA = a.children[index].textContent;
    const textB = b.children[index].textContent;

    return textA.localeCompare(textB);
  };
}
