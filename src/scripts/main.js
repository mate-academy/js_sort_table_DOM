'use strict';

const table = document.querySelector('tbody');
const headers = document.querySelectorAll('th');

document.addEventListener('click', (e) => {
  const header = e.target.closest('th');

  if (header === headers[0]) {
    const rows = Array.from(table.rows);

    rows.sort((a, b) => {
      const cellA = a.cells[0].textContent;
      const cellB = b.cells[0].textContent;

      return cellA.localeCompare(cellB);
    });

    table.innerHTML = '';
    rows.forEach((row) => table.appendChild(row));
  }

  if (header === headers[1]) {
    const rows = Array.from(table.rows);

    rows.sort((a, b) => {
      const cellA = a.cells[1].textContent;
      const cellB = b.cells[1].textContent;

      return cellA.localeCompare(cellB);
    });

    table.innerHTML = '';
    rows.forEach((row) => table.appendChild(row));
  }

  if (header === headers[2]) {
    const rows = Array.from(table.rows);

    rows.sort((a, b) => {
      const cellA = a.cells[2].textContent;
      const cellB = b.cells[2].textContent;

      return cellA.localeCompare(cellB);
    });

    table.innerHTML = '';
    rows.forEach((row) => table.appendChild(row));
  }

  if (header === headers[3]) {
    const rows = Array.from(table.rows);

    rows.sort((a, b) => {
      const cellA = a.cells[3].textContent.replace(/[$,]/g, '');
      const cellB = b.cells[3].textContent.replace(/[$,]/g, '');

      return parseInt(cellA) - parseInt(cellB);
    });

    table.innerHTML = '';
    rows.forEach((row) => table.appendChild(row));
  }
});
