'use strict';

// write code here
const thead = document.querySelector('thead');
const tbody = document.querySelector('tbody');

thead.addEventListener('click', (ev) => {
  const clickedEl = ev.target.closest('th, td');

  if (!clickedEl) {
    return;
  }

  const parentEl = clickedEl.parentElement;

  const index = [...parentEl.children].indexOf(clickedEl);

  const rows = [...tbody.rows];

  rows.sort((rowA, rowB) => {
    const cellA = rowA.cells[index].textContent;
    const cellB = rowB.cells[index].textContent;

    const numA = parseFloat(cellA.replace(/[^0-9.-]/g, ''));
    const numB = parseFloat(cellB.replace(/[^0-9.-]/g, ''));

    if (!isNaN(numA) && !isNaN(numB)) {
      return numA - numB;
    }

    return cellA.localeCompare(cellB);
  });

  tbody.append(...rows);
});
