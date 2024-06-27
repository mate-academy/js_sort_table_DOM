'use strict';

const tableHead = document.querySelector('thead');
const tableBody = document.querySelector('tbody');

const tableRows = [...tableBody.rows];
const onlyNumbers = (string) => +string.replace(/[$,]/g, '');

tableHead.addEventListener('click', (e) => {
  const index = e.target.cellIndex;

  tableRows.sort((a, b) => {
    const el1 = a.children[index].innerText;
    const el2 = b.children[index].innerText;

    return isNaN(onlyNumbers(el1))
      ? el1.localeCompare(el2)
      : onlyNumbers(el1) - onlyNumbers(el2);
  });

  tableBody.append(...tableRows);
});
