'use strict';

const table = document.querySelector('table');
const tr = document.querySelectorAll('tr');
const tbody = document.querySelector('tbody');
const tableContent = [...tr].slice(1, tr.length - 1);

function toNumber(string) {
  const number = string.slice(1).split('').filter(el => el !== ',').join('');

  return +number;
}

const func = (ev) => {
  tbody.innerHTML = '';

  switch (ev.target.innerText) {
    case 'Name':
      tableContent.sort((a, b) =>
        a.children[0].textContent.localeCompare(b.children[0].textContent)
      );
      break;
    case 'Position':
      tableContent.sort((a, b) =>
        a.children[1].textContent.localeCompare(b.children[1].textContent)
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
