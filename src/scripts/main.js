'use strict';

const tableHeader = document.querySelector('thead');

const tableBody = document.querySelector('tbody');

const tableBodyElements = tableBody.rows;

const tableHeaderElements = tableHeader.querySelectorAll('th');

const handler = function(index) {
  const arr = [...tableBodyElements];

  const sortedArr = arr.sort((rowA, rowB) => {
    const cellA = rowA.cells[index].innerHTML;
    const cellB = rowB.cells[index].innerText;

    if (cellA.includes('$')) {
      const newCellA = cellA.slice(1).replace(/,/g, '.');
      const newCellB = cellB.slice(1).replace(/,/g, '.');

      return newCellA - newCellB;
    }

    switch (true) {
      case cellA > cellB:
        return 1;

      case cellB > cellA:
        return -1;

      default:
        return 0;
    }
  });

  tableBody.innerHTML = '';

  for (const row of sortedArr) {
    tableBody.append(row);
  }
};

tableHeaderElements.forEach((element, index) => {
  element.addEventListener('click', () => {
    handler(index);
  });
});
