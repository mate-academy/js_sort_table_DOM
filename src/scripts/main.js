'use strict';

const thead = document.querySelector('thead');
const tbody = document.querySelector('tbody');

thead.addEventListener('click', (e) => {
  const th = e.target.closest('th');

  if (!th) {
    return;
  }

  const index = Array.from(th.parentNode.children).indexOf(th);
  const rows = Array.from(tbody.rows);

  rows.sort((rowA, rowB) => {
    const cellA = rowA.cells[index].textContent.trim();
    const cellB = rowB.cells[index].textContent.trim();

    if (th.textContent === 'Name' || th.textContent === 'Position') {
      return cellA.localeCompare(cellB);
    } else if (th.textContent === 'Age' || th.textContent === 'Salary') {
      const numA = parseFloat(cellA.replace(/[^0-9.-]+/g, '')) || 0;
      const numB = parseFloat(cellB.replace(/[^0-9.-]+/g, '')) || 0;

      return numA - numB;
    }
  });

  rows.forEach((row) => tbody.appendChild(row));
});
