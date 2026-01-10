'use strict';

const table = document.querySelector('table');

document.addEventListener('click', (e) => {
  if (e.target.tagName === 'TH') {
    const collumNumber = e.target.cellIndex;

    sortTableByColumn(table, collumNumber);
  }
});

function sortTableByColumn(tab, columnIndex) {
  const tbody = tab.tBodies[0];
  const rowsArray = Array.from(tbody.rows);

  if (columnIndex === 2) {
    rowsArray.sort(
      (a, b) =>
        parseFloat(a.cells[columnIndex].textContent) -
        parseFloat(b.cells[columnIndex].textContent),
    );
  } else if (columnIndex === 3) {
    rowsArray.sort(
      (a, b) =>
        toNumber(a.cells[columnIndex].textContent) -
        toNumber(b.cells[columnIndex].textContent),
    );
  } else if (columnIndex === 0 || columnIndex === 1) {
    rowsArray.sort((a, b) => {
      return a.cells[columnIndex].textContent.localeCompare(
        b.cells[columnIndex].textContent,
      );
    });
  }

  rowsArray.forEach((row) => {
    tbody.appendChild(row);
  });
}

function toNumber(string) {
  const num = string.slice(1);

  return Number(num.replaceAll(',', ''));
}
