'use strict';

const table = document.querySelector('table');
const tableBody = table.querySelector('tbody');
const cols = table.querySelectorAll('th');
const rows = tableBody.querySelectorAll('tr');

function salaryToNumber(salary) {
  return +(salary.split('$').join('').split(',').join(''));
}

cols.forEach(col => {
  col.addEventListener('click', (e) => {
    const element = e.target.closest('th');
    const index = [...cols].indexOf(element);
    const sortedRows = [...rows];

    sortedRows.sort((a, b) => {
      const elementA = a.children[index].innerText;
      const elementB = b.children[index].innerText;

      if (element.innerText.toLowerCase() === 'salary') {
        return salaryToNumber(elementA) - salaryToNumber(elementB);
      }

      return elementA.localeCompare(elementB);
    });

    tableBody.append(...sortedRows);
  });
});
