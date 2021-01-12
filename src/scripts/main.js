'use strict';

const tableHead = document.querySelector('table thead');
const tableBody = document.querySelector('table tbody');
const tableRows = [...document.querySelectorAll('table tbody tr')];

tableHead.addEventListener('click', e => {
  const criterion = [...tableHead.children[0].children].indexOf(e.target);

  tableRows.sort((a, b) => {
    const textContentA = a.children[criterion].textContent;
    const textContentB = b.children[criterion].textContent;

    if (criterion === 2) { // sorting by age
      return Number(textContentA) - Number(textContentB);
    }

    if (criterion === 3) { // sorting by salary
      const salaryA = textContentA.replace(/\D/g, '');
      const salaryB = textContentB.replace(/\D/g, '');

      return Number(salaryA) - Number(salaryB);
    }

    return textContentA.localeCompare(textContentB);
  });

  tableBody.append(...tableRows);
});
