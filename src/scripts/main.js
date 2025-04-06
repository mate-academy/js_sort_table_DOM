'use strict';

const th = document.querySelector('thead');

th.addEventListener('click', (e) => {
  sortTBody(e.target.cellIndex);
});

function sortTBody(indexCell) {
  const tbody = document.querySelector('tbody');
  const tbodyCopyContent = [...tbody.rows];

  tbodyCopyContent.sort((rowA, rowB) => {
    if (indexCell === 3) {
      const cellA = rowA.cells[indexCell].textContent
        .trim()
        .replace(',', '')
        .replace('$', '');
      const cellB = rowB.cells[indexCell].textContent
        .trim()
        .replace(',', '')
        .replace('$', '');

      return cellA - cellB;
    } else {
      const cellA = rowA.cells[indexCell].textContent.trim();
      const cellB = rowB.cells[indexCell].textContent.trim();

      return cellA.localeCompare(cellB);
    }
  });

  tbody.innerHTML = '';
  tbodyCopyContent.forEach((x) => tbody.appendChild(x));
}
