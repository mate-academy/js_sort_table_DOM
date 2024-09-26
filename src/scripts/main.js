'use strict';

const thead = document.querySelector('thead');
const mainColumn = thead.querySelector('tr');
const tBody = document.querySelector('tbody');
const tBodyRows = tBody.rows;
const rowsArray = Array.from(tBodyRows);

function convertToNumber(stringWithSymbols) {
  return parseFloat(stringWithSymbols.replace(/[$,]/g, ''));
}

function sortRow(rowToSort) {
  while (tBody.firstChild) {
    tBody.removeChild(tBody.firstChild);
  }

  rowToSort.forEach(row => {
    tBody.appendChild(row);
  });
}

thead.addEventListener('click', e => {
  const target = e.target;

  for (let i = 0; i < mainColumn.children.length; i++) {
    let sortedRows;

    if (target === mainColumn.children[i] && i >= 2) {
      sortedRows = rowsArray.sort((a, b) => {
        const salaryA = convertToNumber(a.cells[i].innerText);
        const salaryB = convertToNumber(b.cells[i].innerText);

        return salaryA - salaryB;
      });

      sortRow(sortedRows);
    }

    if (target === mainColumn.children[i] && i < 2) {
      sortedRows = rowsArray.sort((a, b) => {
        const nameA = a.cells[i].innerText.toLowerCase();
        const nameB = b.cells[i].innerText.toLowerCase();

        return nameA.localeCompare(nameB);
      });

      sortRow(sortedRows);
    }
  }
}
);
