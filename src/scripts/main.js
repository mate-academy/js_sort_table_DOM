'use strict';

const salaryToNumber = function(salary) {
  return +salary.substr(1).split(',').join('');
};

const table = document.querySelector('table');
const tHead = table.querySelector('thead');
const tBody = table.querySelector('tbody');
const rows = [...tBody.querySelectorAll('tr')];

tHead.addEventListener('click', e => {
  const columnIndex = e.target.cellIndex;

  let sortingCallback;

  if (e.target.textContent === 'Salary') {
    sortingCallback = function(itemA, itemB) {
      return salaryToNumber(itemA.children[columnIndex].textContent)
        - salaryToNumber(itemB.children[columnIndex].textContent);
    };
  } else {
    sortingCallback = function(itemA, itemB) {
      return itemA.children[columnIndex].textContent
        .localeCompare(itemB.children[columnIndex].textContent);
    };
  }

  const rowsSorted = rows.sort(sortingCallback);

  for (const row of rowsSorted) {
    tBody.append(row);
  }
});
