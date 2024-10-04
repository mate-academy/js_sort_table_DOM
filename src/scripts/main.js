'use strict';

const tableHeaders = document.querySelectorAll('th');
const rows = document.querySelectorAll('tbody tr');

tableHeaders.forEach((header, index) => {
  header.addEventListener('click', (e) => {
    const rowsArray = Array.from(rows);

    rowsArray.sort((rowA, rowB) => {
      const cellA = rowA.cells[index].textContent;
      const cellB = rowB.cells[index].textContent;

      if (index === 3) {
        const salaryA = parseFloat(cellA.replace(/[$,]/g, ''));
        const salaryB = parseFloat(cellB.replace(/[$,]/g, ''));

        return salaryA - salaryB;
      } else {
        return isNaN(cellA) ? cellA.localeCompare(cellB) : cellA - cellB;
      }
    });

    const tbody = document.querySelector('tbody');

    tbody.innerHTML = '';

    rowsArray.forEach((row) => {
      tbody.appendChild(row);
    });
  });
});
