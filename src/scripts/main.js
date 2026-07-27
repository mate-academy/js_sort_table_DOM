'use strict';

// write code here
const table = document.querySelector('table');
const tBody = document.querySelector('tbody');
const rowsFromTBody = [...tBody.querySelectorAll('tr')];

table.addEventListener('click', (e) => {
  if (e.target.tagName !== 'TH') {
    return;
  }

  const columnIndex = e.target.cellIndex;

  rowsFromTBody.sort((firstRow, secondRow) => {
    if (columnIndex === 0 || columnIndex === 1) {
      return firstRow.children[columnIndex].textContent.localeCompare(
        secondRow.children[columnIndex].textContent,
      );
    }

    if (columnIndex === 3) {
      return (
        getSalaryNumber(firstRow.children[columnIndex].textContent) -
        getSalaryNumber(secondRow.children[columnIndex].textContent)
      );
    }

    return (
      Number(firstRow.children[columnIndex].textContent) -
      Number(secondRow.children[columnIndex].textContent)
    );
  });

  for (const elem of rowsFromTBody) {
    tBody.append(elem);
  }
});

const getSalaryNumber = function (str) {
  return Number(str.replaceAll(',', '').replace('$', ''));
};
