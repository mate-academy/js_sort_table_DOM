'use strict';

const table = document.querySelector('table');
const headers = table.querySelectorAll('th');
const tbody = document.querySelector('tbody');
const rows = tbody.querySelectorAll('tr');

headers.forEach(header => header.addEventListener('click', sortCell));

function converter(string) {
  return string.replace('$', '').replace(',', '');
}

function sortCell(element) {
  const targetIndex = element.target.cellIndex;
  const newRows = [...rows];

  newRows.sort((a, b) => (
    targetIndex === 0 || targetIndex === 1
      ? a.cells[targetIndex].innerText
        .localeCompare(b.cells[targetIndex].innerText)
      : converter(a.cells[targetIndex].innerText)
      - converter(b.cells[targetIndex].innerText)
  ));

  rows.forEach(row => tbody.removeChild(row));

  newRows.forEach(newRow => tbody.appendChild(newRow));
}
