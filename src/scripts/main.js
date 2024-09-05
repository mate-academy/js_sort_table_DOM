'use strict';

const table = document.querySelector('table');
const salaryCell = table.tHead.rows[0].cells[3];
const tbody = table.tBodies[0].rows;
const tbodyArr = [...tbody];

for (let i = 0; i < tbodyArr.length; i++) {
  tbodyArr[i].cells[3].innerHTML = Number(
    tbodyArr[i].cells[3].innerHTML.replace(/[$,]/g, ''),
  );
}

salaryCell.addEventListener('click', () => {
  tbodyArr.sort(
    (personA, personB) =>
      personA.cells[3].innerHTML - personB.cells[3].innerHTML,
  );

  for (let i = 0; i < tbodyArr.length; i++) {
    tbody[i].outerHTML = tbodyArr[i].outerHTML;
  }
});
