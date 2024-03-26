'use strict';

const tableHead = document.querySelector('thead');
const tableBody = document.querySelector('tbody');

function convertSalary(salary) {
  const noCurrency = salary.slice(1);

  return +noCurrency.split(',').join('');
}

tableHead.addEventListener('click', e => {
  const columnIndex = e.target.cellIndex;

  const sortColumn = [...tableBody.children].sort((a, b) => {
    const colA = a.querySelectorAll('td')[columnIndex].innerText;
    const colB = b.querySelectorAll('td')[columnIndex].innerText;

    if (columnIndex === 3) {
      return convertSalary(colA) - convertSalary(colB);
    } else {
      return colA.localeCompare(colB);
    }
  });

  sortColumn.forEach(item => tableBody.append(item));
});
