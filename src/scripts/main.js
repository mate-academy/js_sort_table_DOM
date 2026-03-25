'use strict';

const tableBody = document.querySelector('tbody');
const headTable = document.querySelector('thead');

headTable.addEventListener('click', (e) => {
  const link = e.target.closest('th');

  if (!link) {
    return;
  }

  const rows = Array.from(tableBody.querySelectorAll('tr'));
  const cellIndex = link.cellIndex;
  const isNumberColumn = checkIsNumberColumn(rows, cellIndex);

  sortRows(rows, cellIndex, isNumberColumn);
});

function sortRows(rows, cellIndex, isNumberColumn) {
  rows.sort((a, b) => {
    let argA = a.children[cellIndex].textContent.trim();
    let argB = b.children[cellIndex].textContent.trim();

    if (isNumberColumn) {
      argA = Number(argA.replace(/[$,]/g, ''));
      argB = Number(argB.replace(/[$,]/g, ''));

      return argA - argB;
    }

    return argA.localeCompare(argB);
  });

  tableBody.append(...rows);
}

function checkIsNumberColumn(rows, cellIndex) {
  return rows.every((row) => {
    const value = row.children[cellIndex].textContent.trim();
    const cleanValue = value.replace(/[$,]/g, '');

    return cleanValue !== '' && !Number.isNaN(Number(cleanValue));
  });
}
