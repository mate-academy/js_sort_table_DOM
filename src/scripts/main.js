'use strict';

const table = document.querySelector('table');
const tableBody = document.querySelector('tbody');

table.addEventListener('click', (e) => {
  const target = e.target;

  if (target.parentNode.parentNode.tagName !== 'THEAD') {
    return;
  }

  const index = [...document.querySelectorAll('th')]
    .findIndex(item => item === target);

  const rowsToSort = [...document.querySelectorAll('tr')]
    .filter(item => {
      return item.parentElement.tagName !== 'THEAD'
        && item.parentElement.tagName !== 'TFOOT';
    });

  switch (index) {
    case 2:
      rowsToSort.sort((a, b) => {
        return Number(a.children[index].textContent)
          - Number(b.children[index].textContent);
      });
      break;

    case 3:
      rowsToSort.sort((a, b) => {
        return transformToNumber(a.children[index].textContent)
          - transformToNumber(b.children[index].textContent);
      });
      break;

    default:
      rowsToSort.sort((a, b) => {
        return a.children[index].textContent
          .localeCompare(b.children[index].textContent);
      });
      break;
  }

  rowsToSort.forEach(item => {
    tableBody.append(item);
  });
});

function transformToNumber(salary) {
  return Number(salary.replace('$', '').split(',').join(''));
}
