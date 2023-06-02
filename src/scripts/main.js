'use strict';

// write code here

const body = document.querySelector('tbody');
const rows = body.querySelectorAll('tr');
const title = document.querySelector('thead');
const titleCells = title.querySelectorAll('th');

title.addEventListener('click', (e) => {
  const index = e.target.cellIndex;
  const sortedColumn = [...rows].sort((rowA, rowB) => {
    const cellA = rowA.children[index].textContent.toUpperCase();
    const cellB = rowB.children[index].textContent.toUpperCase();

    if (index === titleCells.length - 1) {
      const numA = rowA.children[index].textContent.slice(1).replace(',', '');
      const numB = rowB.children[index].textContent.slice(1).replace(',', '');

      return numA - numB;
    } else {
      return cellA.localeCompare(cellB);
    }
  });

  body.append(...sortedColumn);
});
