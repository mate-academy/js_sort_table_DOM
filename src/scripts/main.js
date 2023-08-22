'use strict';

const thead = document.querySelector('thead');
const mainColumn = thead.querySelector('tr');
const salaryRow = mainColumn.children[3];
const tBody = document.querySelector('tbody');
const tBodyRows = tBody.rows;

function convertToNumber(stringWithSymbols) {
  return parseFloat(stringWithSymbols.replace(/[$,]/g, ''));
}

salaryRow.addEventListener('click', e => {
  const rowsArray = Array.from(tBodyRows);
  const sortedRows = rowsArray.sort((a, b) => {
    const salaryA = convertToNumber(a.cells[3].innerText);
    const salaryB = convertToNumber(b.cells[3].innerText);

    return salaryA - salaryB;
  });

  while (tBody.firstChild) {
    tBody.removeChild(tBody.firstChild);
  }

  sortedRows.forEach(row => {
    tBody.appendChild(row);
  });
}
);
