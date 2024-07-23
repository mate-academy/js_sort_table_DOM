'use strict';

const headers = document.querySelectorAll('thead th');

headers.forEach((header, index) => {
  header.addEventListener('click', () => {
    sort(index);
  });
});

function sort(index) {
  const rows = [...document.querySelectorAll('tbody tr')];

  const rowData = rows.map((row) => {
    const cellsArray = [...row.cells];
    const cellTexts = cellsArray.map((cell) => cell.textContent);

    return cellTexts;
  });

  const isNumericColumn = index === 3;

  rowData.sort((a, b) => {
    let aValue = a[index];
    let bValue = b[index];

    if (isNumericColumn) {
      aValue = parseFloat(aValue.replace(/[^0-9.-]/g, ''));
      bValue = parseFloat(bValue.replace(/[^0-9.-]/g, ''));
    }

    if (isNumericColumn) {
      return aValue - bValue;
    } else {
      return aValue.localeCompare(bValue);
    }
  });

  rows.forEach((row, rowIndex) => {
    row.innerHTML = rowData[rowIndex]
      .map((cellData) => `<td>${cellData}</td>`)
      .join('');
  });
}
