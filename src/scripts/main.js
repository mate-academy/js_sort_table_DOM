'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const tableHeaders = document.querySelectorAll('thead th');
  const tableBody = document.querySelector('tbody');

  tableHeaders.forEach((header, index) => {
    header.addEventListener('click', () => {
      sortElements(index, tableBody);
    });
  });
});

function sortElements(columnIndex, tableBody) {
  const tableRows = [...tableBody.querySelectorAll('tr')];

  tableRows.sort((rowA, rowB) => {
    const cellA = rowA.children[columnIndex].innerText.trim();
    const cellB = rowB.children[columnIndex].innerText.trim();

    let a, b;

    if (!isNaN(cellA.split('$').join('').split(',').join(''))) {
      a = parseFloat(cellA.split('$').join('').split(',').join(''));
    } else {
      a = cellA;
    }

    if (!isNaN(cellB.split('$').join('').split(',').join(''))) {
      b = parseFloat(cellB.split('$').join('').split(',').join(''));
    } else {
      b = cellB;
    }

    if (a > b) {
      return 1;
    } else if (a < b) {
      return -1;
    } else {
      return 0;
    }
  });

  tableBody.innerHTML = '';

  tableRows.forEach((row) => tableBody.appendChild(row));
}
