'use strict';

const table = document.querySelector('table');
const tr = document.querySelectorAll('tr');
const tbody = document.querySelector('tbody');
const tableContent = [...tr].slice(1, tr.length - 1);

function toNumber(string) {
  const number = string.slice(1).split('').filter(el => el !== ',').join('');

  return +number;
}

function stringCompare(a, b, child) {
  const result
  = a.children[child].textContent.localeCompare(b.children[child].textContent);

  return result;
}

const func = (ev) => {
  tbody.innerHTML = '';

  switch (ev.target.innerText) {
    case 'Name':
      tableContent.sort((a, b) =>
        stringCompare(a, b, 0)
      );
      break;
    case 'Position':
      tableContent.sort((a, b) =>
        stringCompare(a, b, 1)
      );
      break;
    case 'Age':
      tableContent.sort((a, b) =>
        a.children[2].textContent - b.children[2].textContent
      );
      break;
    case 'Salary':
      tableContent.sort((a, b) =>
        toNumber(a.children[3].textContent)
         - toNumber(b.children[3].textContent)
      );
      break;
    default:
      break;
  }

  for (let row = 0; row < tableContent.length; row++) {
    tbody.append(tableContent[row]);
  }
};

table.addEventListener('click', func);
