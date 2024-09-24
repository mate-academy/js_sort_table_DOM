'use strict';

const table = document.querySelector('table');
const headers = table.querySelectorAll('th');

headers.forEach((header, index) => {
  header.addEventListener('click', () => {
    const rows = Array.from(table.querySelectorAll('tbody tr'));
    const isAscending = header.classList.toggle('asc');

    headers.forEach((h, i) => {
      if (i !== index) {
        h.classList.remove('asc', 'desc');
      }
    });

    rows.sort((rowA, rowB) => {
      const cellA = rowA.cells[index].innerText.trim();
      const cellB = rowB.cells[index].innerText.trim();

      switch (index) {
        case 2:
          return isAscending ? cellA - cellB : cellB - cellA;

        case 3:
          const salaryA = parseFloat(cellA.replace(/[^0-9.-]+/g, ''));
          const salaryB = parseFloat(cellB.replace(/[^0-9.-]+/g, ''));

          return isAscending ? salaryA - salaryB : salaryB - salaryA;

        default:
          return isAscending
            ? cellA.localeCompare(cellB)
            : cellB.localeCompare(cellA);
      }
    });

    const tbody = table.querySelector('tbody');

    tbody.innerHTML = '';
    rows.forEach((row) => tbody.appendChild(row));
  });
});
