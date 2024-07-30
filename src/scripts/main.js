'use strict';

const table = document.querySelector('table');
const tableHead = [...table.tHead.rows[0].cells];
let sortedRows = [];

const stringToDigit = (string) => {
  return +string.replace(/\D/g, '');
};

tableHead.forEach((el) => {
  el.addEventListener('click', (e) => {
    const i = e.target.cellIndex;
    const body = table.tBodies[0];
    const rows = [...table.tBodies[0].rows];
    // const sortedBody = document.createElement('body');

    sortedRows = rows.sort((a, b) => {
      const contentsA = a.cells[i].textContent;
      const contentsB = b.cells[i].textContent;

      if (e.target.textContent === 'Salary') {
        return stringToDigit(contentsA) - stringToDigit(contentsB);
      }

      return contentsA.localeCompare(contentsB);
    });

    body.append(...sortedRows);
  });
});
