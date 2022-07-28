'use strict';

const header = [...document.querySelector('thead').firstElementChild.children];
const list = document.querySelector('tbody');

document.querySelector('table').addEventListener('click', (e) => {
  const target = e.target.closest('th');

  const targetElementIndex = header.indexOf(target);

  if (!target || targetElementIndex === -1) {
    return;
  }

  const employeeRowElements = [...list.children];

  const getRowValue = row => row.children[targetElementIndex].textContent;

  switch (target.textContent) {
    case 'Age':
      employeeRowElements.sort((row1, row2) =>
        getRowValue(row1) - getRowValue(row2)
      );
      break;

    case 'Salary':
      employeeRowElements.sort((row1, row2) =>
        getRowValue(row1).replace(/[^0-9]/g, '')
        - getRowValue(row2).replace(/[^0-9]/g, '')
      );
      break;

    case 'Name':
    case 'Position':
      employeeRowElements.sort((row1, row2) =>
        getRowValue(row1).localeCompare(getRowValue(row2))
      );
      break;
  }

  list.append(...employeeRowElements);
});
