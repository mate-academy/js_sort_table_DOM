'use strict';

const tbody = document.querySelector('tbody');
const thead = document.querySelector('thead');

const collectionOfButton = [...thead.rows[0].cells];

for (let i = 0; i < collectionOfButton.length; i++) {
  collectionOfButton[i].addEventListener('click', () => {
    [...tbody.rows]
      .sort((rowA, rowB) => {
        const salaryA = rowA.lastElementChild.textContent.replace(/[$,]/g, '');
        const SalaryB = rowB.lastElementChild.textContent.replace(/[$,]/g, '');

        return salaryA - SalaryB;
      })
      .forEach((row) => tbody.append(row));
  });
}
