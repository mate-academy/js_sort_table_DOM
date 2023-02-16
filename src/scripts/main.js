'use strict';

const table = document.querySelector('table');

table.addEventListener('click', (e) => {
  if (e.target.tagName !== 'TH') {
    return;
  }

  const index = e.target.cellIndex;
  const type = e.target.innerText;
  const tBody = document.querySelector('tbody');
  const tr = [...tBody.querySelectorAll('tr')];
  let compare;

  switch (true) {
    case type === 'Position' || type === 'Name':
      compare = (rowA, rowB) => {
        return rowA.cells[index].innerText > rowB.cells[index].innerText
          ? 1 : -1;
      };
      break;
    case type === 'Age':
      compare = (numA, numB) => {
        return numA.cells[index].innerText - numB.cells[index].innerText;
      };
      break;
    case type === 'Salary':
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

  tr.sort(compare);

  tBody.append(...tr);
});
