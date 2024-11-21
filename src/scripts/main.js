/* eslint-disable function-paren-newline */
'use strict';

const table = document.querySelector('table');
const thead = table.tHead.rows[0];

const nameCell = thead.cells[0];
const positionCell = thead.cells[1];
const ageCell = thead.cells[2];
const salaryCell = thead.cells[3];

const tbody = table.tBodies[0].rows;
const tbodyArr = [...tbody];

thead.addEventListener('click', (_event) => {
  if (_event.target === nameCell) {
    tbodyArr.sort((personA, personB) =>
      personA.cells[0].innerHTML.localeCompare(personB.cells[0].innerHTML),
    );
  }

  if (_event.target === positionCell) {
    tbodyArr.sort((personA, personB) =>
      personA.cells[1].innerHTML.localeCompare(personB.cells[1].innerHTML),
    );
  }

  if (_event.target === ageCell) {
    tbodyArr.sort(
      (personA, personB) =>
        personA.cells[2].innerHTML - personB.cells[2].innerHTML,
    );
  }

  if (_event.target === salaryCell) {
    tbodyArr.sort(
      (personA, personB) =>
        Number(personA.cells[3].innerHTML.replace(/[$,]/g, '')) -
        Number(personB.cells[3].innerHTML.replace(/[$,]/g, '')),
    );
  }

  for (let i = 0; i < tbodyArr.length; i++) {
    tbody[i].outerHTML = tbodyArr[i].outerHTML;
  }
});
