'use strict';

const table = document.querySelector('table');

table.addEventListener('click', (e) => {
  if (e.target.tagName !== 'TH') {
    return;
  }

  const index = e.target.cellIndex;
  const type = e.target.innerText;
  const grid = document.querySelector('tbody');
  const employees = [...grid.querySelectorAll('tr')];
  let compare;

  switch (type) {
    case 'Position':
    case 'Name':
      compare = (rowA, rowB) => {
        const first = rowA.cells[index].innerText;
        const second = rowB.cells[index].innerText;

        if (first > second) {
          return 1;
        }

        if (first < second) {
          return -1;
        }

        return 0;
      };
      break;
    case 'Age':
      compare = (numA, numB) => {
        return numA.cells[index].innerText - numB.cells[index].innerText;
      };
      break;
    case 'Salary':
      compare = (salaryA, salaryB) => {
        return (
          salaryA.cells[index].innerText.slice(1).replaceAll(',', '.')
          - salaryB.cells[index].innerText.slice(1).replaceAll(',', '.')
        );
      };
      break;
    default:
      throw new Error("it doesn't exist");
  }

  employees.sort(compare);

  grid.append(...employees);
});
