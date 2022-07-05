'use strict';

function parseSalary(sum) {
  return +sum.slice(1).split(',').join('');
}

const table = document.querySelector('table');
const rows = [...document.querySelectorAll('tbody>tr')];
const body = document.querySelector('tbody');

table.addEventListener('click', (e) => {
  if (e.target.tagName !== 'TH') {
    return;
  }

  const index = e.target.cellIndex;

  rows.sort((a, b) => {
    const aText = a.children[index].textContent;
    const bText = b.children[index].textContent;

    if (index === 3) {
      return parseSalary(aText) - parseSalary(bText);
    }

    return aText.localeCompare(bText);
  });

  body.append(...rows);
});
