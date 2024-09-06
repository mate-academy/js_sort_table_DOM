'use strict';

const thead = document.querySelector('thead');

thead.addEventListener('click', (e) => {
  const target = e.target;

  if (target.tagName === 'th') {
    const index = target.cellIndex;

    sortTable(index);
  }
});

function sortTable(indexColumn) {
  const column = indexColumn; // [3]
  const tbody = document.querySelector('tbody');
  const rows = Array.from(tbody.querySelectorAll('tr'));

  rows.sort((a, b) => {
    if (column === 3) {
      const aValue = a.cells[column].innerText.replace(/[$,]/g, '');
      const bValue = b.cells[column].innerText.replace(/[$,]/g, '');

      return aValue - bValue;
    }

    if (column === 2) {
      return a - b;
    }

    a.cells[column].toLowerCase();
    b.cells[column].toLowerCase();

    return a.localeCompare(b);
  });

  rows.forEach((row) => tbody.appendChild(row));
}
