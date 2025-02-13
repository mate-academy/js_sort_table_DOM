'use strict';

const th = document.querySelectorAll('th');

th.forEach((header, index) => {
  header.addEventListener('click', () => {
    sortTable(index);
  });
});

function sortTable(index) {
  const tbody = document.querySelector('tbody');
  const rows = Array.from(tbody.querySelectorAll('tr'));

  rows.sort((rowA, rowB) => {
    const cellA = rowA.children[index].textContent.trim();
    const cellB = rowB.children[index].textContent.trim();

    const numA = parseFloat(cellA);
    const numB = parseFloat(cellB);

    if (!isNaN(numA) && !isNaN(numB)) {
      return numA - numB;
    } else {
      return cellA.localeCompare(cellB);
    }
  });

  rows.forEach((row) => tbody.appendChild(row));
}
