'use strict';
// write code here

const table = document.querySelector('table');
const headers = table.tHead.querySelectorAll('th');
const body = table.querySelector('tbody');

function getSalary(query) {
  return +query.slice(1).replaceAll(',', '');
}

headers.forEach((header, index) => {
  header.addEventListener('click', () => {
    const headerName = header.innerText;

    const rows = [...body.querySelectorAll('tr')];

    rows.sort((a, b) => {
      const cellA = a.cells[index].innerText;
      const cellB = b.cells[index].innerText;

      switch (headerName) {
        case 'Name':
        case 'Position':
          return cellA.localeCompare(cellB);

        case 'Age':
          return +cellA - +cellB;

        case 'Salary':
          return getSalary(cellA) - getSalary(cellB);
      }
    });

    rows.forEach((row) => body.append(row));
  });
});
