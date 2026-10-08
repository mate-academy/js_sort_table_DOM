'use strict';

function getNumber(el) {
  return +el.textContent.replace('$', '').replace(',', '');
}

const tableHeaders = document.querySelector('thead');
const trColection = [...document.querySelectorAll('tbody tr')];
const tbody = document.querySelector('tbody');

tableHeaders.addEventListener('click', (e) => {
  switch (e.target.textContent) {
    case 'Name':
      trColection.sort((e1, e2) => {
        const str1 = e1.cells[0].textContent;
        const str2 = e2.cells[0].textContent;

        return str1.localeCompare(str2);
      });

      trColection.forEach((n) => tbody.append(n));
      break;

    case 'Position':
      trColection.sort((e1, e2) => {
        const str1 = e1.cells[1].textContent;
        const str2 = e2.cells[1].textContent;

        return str1.localeCompare(str2);
      });

      trColection.forEach((n) => tbody.append(n));
      break;

    case 'Age':
      trColection.sort((n1, n2) => {
        return getNumber(n1.cells[2]) - getNumber(n2.cells[2]);
      });

      trColection.forEach((n) => tbody.append(n));
      break;

    case 'Salary':
      trColection.sort((n1, n2) => {
        return getNumber(n1.cells[3]) - getNumber(n2.cells[3]);
      });

      trColection.forEach((n) => tbody.append(n));
      break;
  }
});
