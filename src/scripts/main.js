'use strict';

const headItems = document.querySelectorAll('thead th');
const bodyRows = document.querySelectorAll('tbody tr');

function sortItems(index) {
  const rows = Array.from(bodyRows);

  rows.sort((rowA, rowB) => {
    const cellA = rowA.cells[index].textContent;
    const cellB = rowB.cells[index].textContent;

    return cellA.localeCompare(cellB, undefined, { numeric: true });
  });

  rows.forEach((row) => row.parentNode.append(row));
}

headItems.forEach((item, index) => {
  item.addEventListener('click', () => sortItems(index));
});
