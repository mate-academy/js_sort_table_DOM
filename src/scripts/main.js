'use strict';

const title = document.querySelectorAll('th');
const tbody = document.querySelector('tbody');
const initialRows = Array.from(tbody.querySelectorAll('tr'));

function sortRowsByColumn(dataRows, columnIndex) {
  return dataRows.sort((a, b) => {
    const cellA = a.cells[columnIndex].textContent.trim();
    const cellB = b.cells[columnIndex].textContent.trim();

    if (cellA < cellB) {
      return -1;
    }

    if (cellA > cellB) {
      return 1;
    }

    return 0;
  });
}

function sortRowsByNumber(dataRows, columnIndex) {
  return dataRows.sort((a, b) => {
    const cellA = parseFloat(
      a.cells[columnIndex].textContent.replace('$', '').replace(/,/g, ''),
    );
    const cellB = parseFloat(
      b.cells[columnIndex].textContent.replace('$', '').replace(/,/g, ''),
    );

    return cellA - cellB;
  });
}

title.forEach((element, index) => {
  element.addEventListener('click', (eve) => {
    const link = eve.target.textContent;

    if (link === 'Age') {
      const sortedRows = sortRowsByNumber(initialRows, 2);

      sortedRows.forEach((row) => {
        tbody.appendChild(row);
      });
    }

    if (link === 'Salary') {
      const sortedRows = sortRowsByNumber(initialRows, 3);

      sortedRows.forEach((row) => {
        tbody.appendChild(row);
      });
    }

    if (link === 'Name') {
      const sortedRows = sortRowsByColumn(initialRows, 0);

      sortedRows.forEach((row) => {
        tbody.appendChild(row);
      });
    }

    if (link === 'Position') {
      const sortedRows = sortRowsByColumn(initialRows, 1);

      sortedRows.forEach((row) => {
        tbody.appendChild(row);
      });
    }
  });
});
