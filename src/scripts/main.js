'use strict';

const headers = document.querySelectorAll('th');

headers.forEach((header) => {
  header.addEventListener('click', () => {
    const columnIndex = Array.from(headers).indexOf(header);
    const rows = Array.from(document.querySelectorAll('tr')).slice(1, -1);

    const values = rows.map((row) => {
      const cell = row.cells[columnIndex].textContent;

      return { row, cell };
    });

    const sortedValues = values.sort((a, b) => {
      if (a.cell[0] === '$' && b.cell[0] === '$') {
        const first = parseFloat(a.cell.replace(/[$,]/g, ''));
        const second = parseFloat(b.cell.replace(/[$,]/g, ''));

        return first - second;
      } else if (!isNaN(a.cell) && !isNaN(b.cell)) {
        return parseFloat(a.cell) - parseFloat(b.cell);
      } else {
        return a.cell.localeCompare(b.cell);
      }
    });

    const tableBody = document.querySelector('tbody');

    tableBody.innerHTML = '';

    sortedValues.forEach(({ row }) => {
      tableBody.appendChild(row);
    });
  });
});
