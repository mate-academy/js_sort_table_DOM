'use strict';

const tableBody = document.querySelector('tbody');
const rows = [...tableBody.querySelectorAll('tr')];
const headers = document.querySelectorAll('th');

headers.forEach((header, index) => {
  header.addEventListener('click', (e) => {
    sortTable(index);
  });
});

function sortTable(cellIndex) {
  rows.sort((data1, data2) => {
    return data1.cells[cellIndex].textContent.localeCompare(
      data2.cells[cellIndex].textContent,
      undefined,
      { numeric: true },
    );
  });

  tableBody.innerHTML = '';

  rows.forEach((row) => {
    tableBody.appendChild(row);
  });
}
