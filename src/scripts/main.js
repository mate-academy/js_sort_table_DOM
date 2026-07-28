'use strict';

const table = document.querySelector('table');
const thead = table.querySelector('thead');
const tbody = table.querySelector('tbody');

thead.addEventListener('click', function (e) {
  const th = e.target.closest('th');

  if (!th) {
    return;
  }

  const columnIndex = [...th.parentNode.children].indexOf(th);
  const rows = [...tbody.querySelectorAll('tr')];

  rows.sort((rowA, rowB) => {
    const cellA = rowA.children[columnIndex].textContent.trim();
    const cellB = rowB.children[columnIndex].textContent.trim();

    const numA = parseFloat(cellA.replace(/[^0-9.-]/g, ''));
    const numB = parseFloat(cellB.replace(/[^0-9.-]/g, ''));

    if (!isNaN(numA) && !isNaN(numB)) {
      return numA - numB;
    }

    return cellA.localeCompare(cellB);
  });

  rows.forEach((row) => tbody.appendChild(row));
});
