'use strict';

const table = document.querySelector('table');
const thead = table.querySelector('thead');
const tbody = table.querySelector('tbody');

const arrWithTd = [];

for (let i = 0; i < tbody.children.length; i++) {
  arrWithTd.push(Array.from(tbody.children[i].cells));
}

thead.addEventListener('click', e => {
  const target = e.target.closest('th');

  if (!target) {
    return;
  }

  const head = target.textContent;

  switch (head) {
    case 'Name':
      arrWithTd.sort((a, b) =>
        a[0].textContent.localeCompare(b[0].textContent));
      break;
    case 'Position':
      arrWithTd.sort((a, b) =>
        a[1].textContent.localeCompare(b[1].textContent));
      break;
    case 'Age':
      arrWithTd.sort((a, b) =>
        a[2].textContent - b[2].textContent);
      break;
    case 'Salary':
      arrWithTd.sort((a, b) =>
        parseFloat(a[3].textContent.slice(1))
        - parseFloat(b[3].textContent.slice(1)));
      break;
  }

  for (let i = 0; i < arrWithTd.length; i++) {
    const tr = document.createElement('tr');

    for (const td of arrWithTd[i]) {
      tr.append(td);
    }

    tbody.append(tr);
  }
});
