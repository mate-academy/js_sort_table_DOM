'use strict';

const table = document.querySelector('table');
const headers = table.querySelectorAll('th');
const tableBody = table.querySelector('tbody');

headers.forEach(function(header, index) {
  header.addEventListener('click', () => {
    sortColumn(index);
  });
});

function sortColumn(index) {
  let sortedRows = [];

  if (index === 3) {
    sortedRows = Array.from(tableBody.rows).sort((a, b) =>
      (salaryToNumber(a.cells[index].innerHTML)
    - salaryToNumber(b.cells[index].innerHTML)));
  } else {
    sortedRows = Array.from(tableBody.rows).sort((a, b) =>
      (a.cells[index].innerHTML.localeCompare(b.cells[index].innerHTML)));
  }
  table.tBodies[0].append(...sortedRows);
}

function salaryToNumber(text) {
  return +text.slice(1).replace(/,/g, '');
};
