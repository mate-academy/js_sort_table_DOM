'use strict';

// write code here
const colNames = document.querySelectorAll('thead th');

const tableBody = document.querySelector('tbody');

// console.dir(colNames);

colNames.forEach((column, index) => {
  column.setAttribute('data-column', column.textContent.toLowerCase());

  column.addEventListener('click', (e) => {
    const rowsArr = Array.from(tableBody.querySelectorAll('tr'));

    const col = column.getAttribute('data-column');

    rowsArr.sort((rowA, rowB) => {
      const cellA = rowA.children[index].textContent.trim();
      const cellB = rowB.children[index].textContent.trim();

      switch (col) {
        case 'name':
        case 'position':
          return cellA.localeCompare(cellB);
        case 'age':
          return Number(cellA) - Number(cellB);
        case 'salary':
          const salaryA = Number(cellA.replace(/[$,]/g, ''));
          const salaryB = Number(cellB.replace(/[$,]/g, ''));

          return salaryA - salaryB;
      }
    });

    while (tableBody.firstChild) {
      tableBody.removeChild(tableBody.firstChild);
    }
    rowsArr.forEach((row) => tableBody.appendChild(row));
  });
});
