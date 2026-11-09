'use strict';

const sourceTable = document.querySelector('table');
const tableHeaders = sourceTable.querySelector('thead');
const tableRowsDOM = sourceTable.querySelector('tbody');
const tableRows = sourceTable.querySelector('tbody').children;

tableHeaders.addEventListener('click', (e) => {
  if (e.target.closest('th') === null) {
    return;
  }

  const headerIndex = e.target.closest('th').cellIndex;
  const copyRows = [...tableRows];

  if (headerIndex === 2) {
    copyRows.sort((firstRow, secondRow) => {
      return (
        Number(firstRow.cells[headerIndex].textContent) -
        Number(secondRow.cells[headerIndex].textContent)
      );
    });
  } else if (headerIndex === 3) {
    copyRows.sort((firstRow, secondRow) => {
      let firstSalary = firstRow.cells[headerIndex].textContent;
      let secondSalary = secondRow.cells[headerIndex].textContent;

      firstSalary = Number(firstSalary.replace(/[$,]/g, ''));
      secondSalary = Number(secondSalary.replace(/[$,]/g, ''));

      return firstSalary - secondSalary;
    });
  } else {
    copyRows.sort((firstRow, secondRow) => {
      const firstText = firstRow.cells[headerIndex].textContent;
      const secondText = secondRow.cells[headerIndex].textContent;

      return firstText.localeCompare(secondText);
    });
  }

  copyRows.forEach((row) => tableRowsDOM.appendChild(row));
});
