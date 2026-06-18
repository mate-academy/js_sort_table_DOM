'use strict';

const sortEmployeeTable = document.querySelector('thead');

sortEmployeeTable.addEventListener('click', (e) => {
  if (e.target.tagName !== 'TH') {
    return;
  }

  const colIndex = e.target.cellIndex;

  const tableBody = document.querySelector('tbody');
  const tableCells = Array.from(tableBody.querySelectorAll('tr'));

  tableCells.sort((rowA, rowB) => {
    const textA = rowA.cells[colIndex].textContent;
    const textB = rowB.cells[colIndex].textContent;

    return textA.localeCompare(textB, undefined, { numeric: true });
  });

  for (const row of tableCells) {
    tableBody.append(row);
  }
});
