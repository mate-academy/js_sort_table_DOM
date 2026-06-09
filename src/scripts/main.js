'use strict';

const headers = document.querySelectorAll('th');
const tbody = document.querySelector('tbody');

function getCellValue(row, index) {
  const value = row.cells[index].textContent;

  if (index === 2 || index === 3) {
    return Number(value.replaceAll('$', '').replaceAll(',', ''));
  }

  return value;
}

for (let i = 0; i < headers.length; i++) {
  const header = headers[i];

  header.addEventListener('click', function () {
    const rows = [...tbody.querySelectorAll('tr')];

    rows.sort(function (rowA, rowB) {
      const valueA = getCellValue(rowA, i);
      const valueB = getCellValue(rowB, i);

      if (typeof valueA === 'number') {
        return valueA - valueB;
      }

      return valueA.localeCompare(valueB);
    });

    for (const row of rows) {
      tbody.append(row);
    }
  });
}
