'use strict';

const table = document.querySelector('table');
const thead = table.querySelector('thead');
const tbody = table.querySelector('tbody');

thead.addEventListener('click', (e) => {
  if (e.target.tagName !== 'TH') {
    return;
  }

  const th = e.target;

  const cellIndex = Array.from(th.parentNode.children).indexOf(th);

  const rows = Array.from(tbody.querySelectorAll('tr'));

  rows.sort((rowA, rowB) => {
    let cellA = rowA.children[cellIndex].textContent.trim();
    let cellB = rowB.children[cellIndex].textContent.trim();

    cellA = cellA.replace(/[$,]/g, '');
    cellB = cellB.replace(/[$,]/g, '');

    if (!isNaN(cellA) && !isNaN(cellB)) {
      return Number(cellA) - Number(cellB);
    }

    return cellA.localeCompare(cellB);
  });

  tbody.append(...rows);
});
