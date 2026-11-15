'use strict';

const table = document.querySelector('table');
const tbody = table.querySelector('tbody');
const thead = table.querySelector('thead').rows[0];

const arrOfTbody = [...tbody.rows];

thead.addEventListener('click', (e) => {
  if (e.target.cellIndex === 0) {
    arrOfTbody
      .sort((a, b) => {
        const textA = a.cells[0].textContent;
        const textB = b.cells[0].textContent;

        return textA.localeCompare(textB);
      })
      .forEach((element) => tbody.append(element));
  }

  if (e.target.cellIndex === 1) {
    arrOfTbody
      .sort((a, b) => {
        const textA = a.cells[1].textContent;
        const textB = b.cells[1].textContent;

        return textA.localeCompare(textB);
      })
      .forEach((element) => tbody.append(element));
  }

  if (e.target.cellIndex === 2) {
    arrOfTbody
      .sort((a, b) => {
        const numA = Number(a.cells[2].textContent);
        const numB = Number(b.cells[2].textContent);

        return numA - numB;
      })
      .forEach((element) => tbody.append(element));
  }

  if (e.target.cellIndex === 3) {
    arrOfTbody
      .sort((a, b) => {
        const numA = Number(a.cells[3].textContent.replace(/[$,]/g, ''));
        const numB = Number(b.cells[3].textContent.replace(/[$,]/g, ''));

        return numA - numB;
      })
      .forEach((element) => tbody.append(element));
  }
});
