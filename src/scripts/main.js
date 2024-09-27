'use strict';

const thead = document.querySelector('thead');

thead.addEventListener('click', (evnt) => {
  if (evnt.target.tagName === 'TH') {
    const headerCell = evnt.target;
    const columnIndex = headerCell.cellIndex;

    sortTable(columnIndex);
  }
});

function toNumber(str) {
  return +str.replace(/[$,]/g, '');
}

function sortTable(columnIndex) {
  const table = document.querySelector('table');
  const tbody = table.querySelector('tbody');
  const rows = [...tbody.querySelectorAll('tr')];

  rows.sort((rowA, rowB) => {
    const cellA = rowA.cells[columnIndex].textContent;
    const cellB = rowB.cells[columnIndex].textContent;

    if (cellA.includes('$')) {
      return toNumber(cellA) - toNumber(cellB);
    } else {
      return cellA.localeCompare(cellB);
    }
  });

  while (tbody.firstChild) {
    tbody.removeChild(tbody.firstChild);
  }

  rows.forEach((row) => {
    tbody.appendChild(row);
  });
}
