'use strict';

function sortRowsByNumber(rows, childSelector) {
  let result = [];
  const childNomer = childSelector + 1;

  if (childSelector === 0 || childSelector === 1) {
    result = [...rows].sort((a, b) => {
      const lettersA = a.querySelector(
        `td:nth-child(${childNomer})`,
      ).textContent;
      const lettersB = b.querySelector(
        `td:nth-child(${childNomer})`,
      ).textContent;

      return lettersB.localeCompare(lettersA);
    });
  } else {
    result = [...rows].sort((a, b) => {
      const salaryA = +a
        .querySelector(`td:nth-child(${childNomer})`)
        .textContent.replace(/,/g, '')
        .replace(/\$/, '');
      const salaryB = +b
        .querySelector(`td:nth-child(${childNomer})`)
        .textContent.replace(/,/g, '')
        .replace(/\$/, '');

      return salaryA - salaryB;
    });
  }

  const tbody = document.querySelector('tbody');

  tbody.innerHTML = '';
  result.forEach((row) => tbody.appendChild(row));
}

const tableRows = document.querySelectorAll('tbody tr');
const filter = document.querySelectorAll('thead tr th');

for (let i = 0; i < filter.length; i++) {
  filter[i].addEventListener('click', () => sortRowsByNumber(tableRows, i));
}
