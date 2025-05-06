'use strict';

const tableBody = document.querySelector('tbody');
const tableHeadRow = document.querySelector('thead tr');
const bodyArr = Array.from(tableBody.children);

tableHeadRow.addEventListener('click', (e) => {
  let target = e.target;

  while (target && target.nodeName !== 'TH') {
    target = target.parentElement;
  }

  if (!target) {
    return;
  }

  const headers = Array.from(tableHeadRow.children);
  const index = headers.indexOf(target);

  bodyArr.sort((row1, row2) => {
    const cell1 = row1.children[index];
    const cell2 = row2.children[index];

    const value1 = cell1.textContent.replace(/[$,]/g, '');
    const value2 = cell2.textContent.replace(/[$,]/g, '');

    const num1 = parseInt(value1);
    const num2 = parseInt(value2);

    if (!isNaN(num1) && !isNaN(num2)) {
      return num1 - num2;
    } else {
      return cell1.textContent.localeCompare(cell2.textContent);
    }
  });

  bodyArr.forEach((row) => tableBody.appendChild(row));
});
