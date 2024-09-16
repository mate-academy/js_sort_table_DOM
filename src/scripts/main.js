'use strict';

const table = document.querySelector('table');
const thead = table.querySelector('thead');
const tbody = table.querySelector('tbody');

const arrWithTd = [];

const thOfHead = thead.firstElementChild.children;

for (let i = 0; i < tbody.children.length; i++) {
  arrWithTd.push(Array.from(tbody.children[i].cells));
}

thead.addEventListener('click', e => {
  const target = e.target;

  const click = target.textContent;

  for (let i = 0; i < thOfHead.length; i++) {
    if (thOfHead[i].textContent === click) {
      switch (click) {
        case 'Name':
        case 'Position':
          arrWithTd.sort((a, b) =>
            a[i].textContent.localeCompare(b[i].textContent));
          break;
        case 'Age':
          arrWithTd.sort((a, b) =>
            a[i].textContent - b[i].textContent);
          break;
        case 'Salary':
          arrWithTd.sort((a, b) =>
            parseFloat(a[i].textContent.slice(1))
            - parseFloat(b[i].textContent.slice(1)));
          break;
      }
    }
  }

  for (let i = 0; i < arrWithTd.length; i++) {
    const tr = document.createElement('tr');

    for (const td of arrWithTd[i]) {
      tr.append(td);
    }

    tbody.append(tr);
  }
});
