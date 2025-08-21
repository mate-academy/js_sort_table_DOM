'use strict';

const tableHeaders = document.querySelectorAll('thead th');
const tbody = document.querySelector('tbody');

function getCellValue(row, colIndex) {
  return row.cells[colIndex].textContent.trim();
}

function compare(a, b, type) {
  if (type === 'number') {
    return parseFloat(a) - parseFloat(b);
  }

  return a.localeCompare(b);
}

tableHeaders.forEach((header, index) => {
  header.addEventListener('click', function () {
    const colIndex = index;
    const rows = Array.from(tbody.querySelectorAll('tr'));

    const type = colIndex === 2 || colIndex === 3 ? 'number' : 'string';

    rows.sort((a, b) => {
      let aValue = getCellValue(a, colIndex);
      let bValue = getCellValue(b, colIndex);

      if (type === 'number') {
        if (colIndex === 3) {
          aValue = aValue.replace('$', '').replace(/,/g, '');
          bValue = bValue.replace('$', '').replace(/,/g, '');
        }
      }

      return compare(aValue, bValue, type);
    });

    rows.forEach((row) => tbody.appendChild(row));
  });
});
