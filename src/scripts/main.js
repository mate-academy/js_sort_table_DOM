'use strict';

const table = document.querySelector('table');
const headers = table.querySelectorAll('th');
const tableBody = table.querySelector('tbody');

[].forEach.call(headers, function(header, index) {
  header.addEventListener('click', (e) => {
    sortColumn(index);
  });
});

function sortColumn(index) {
  let sortedRows = [];
  const salaryToNumber = (text) => {
    return +text.slice(1).replace(/,/g, '');
  };

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
