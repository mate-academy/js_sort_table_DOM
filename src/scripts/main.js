'use strict';

const table = document.querySelector('table');
const tbody = table.tBodies[0];
const tHead = table.tHead;
const employeess = [...tbody.children];

tHead.addEventListener('click', (event) => {
  const item = event.target;

  switch (item.textContent) {
    case 'Name':
      employeess.sort((a, b) => {
        return (a.children[0].textContent
          .localeCompare(b.children[0].textContent));
      });
      break;

    case 'Position':
      employeess.sort((a, b) => {
        return (a.children[1].textContent
          .localeCompare(b.children[1].textContent));
      });
      break;

    case 'Age':
      employeess.sort((a, b) => {
        return (+a.children[2].textContent - (+b.children[2].textContent));
      });
      break;

    case 'Salary':
      employeess.sort((a, b) => {
        return (+a.children[3].textContent
          .split(',').join('').split('$').join(''))
          - (+b.children[3].textContent
            .split(',').join('').split('$').join(''));
      });
      break;
  }

  tbody.parentElement.append(...employeess);
});
