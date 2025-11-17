'use strict';

const th = document.querySelectorAll('thead th');
const tbody = document.querySelector('tbody');

th.forEach((header, index) => {
  header.addEventListener('click', () => {
    const rows = Array.from(tbody.querySelectorAll('tr'));

    rows.sort((rowA, rowB) => {
      let cellA = rowA.children[index].textContent;
      let cellB = rowB.children[index].textContent;

      if (index === 2) {
        cellA = Number(cellA);
        cellB = Number(cellB);
      } else if (index === 3) {
        cellA = Number(cellA.split('$').join('').split(',').join(''));
        cellB = Number(cellB.split('$').join('').split(',').join(''));
      } else {
        return cellA.localeCompare(cellB);
      }

      return cellA - cellB;
    });

    tbody.append(...rows);
  });
});
