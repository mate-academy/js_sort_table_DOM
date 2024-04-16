'use strict';

const headers = [...document.querySelectorAll('th')];
const tableBody = document.querySelector('tbody');
const tableRows = [...tableBody.querySelectorAll('tr')];

headers.forEach((header, i) => {
  header.addEventListener('click', () => sortByIndex(i));
});

function sortByIndex(index) {
  tableRows.sort((row1, row2) => {
    const cell1 = row1.cells[index].textContent;
    const cell2 = row2.cells[index].textContent;

    return cell1.localeCompare(cell2, undefined, { numeric: true });
  });

  tableBody.innerHTML = '';
  tableRows.forEach((row) => tableBody.append(row));
}
