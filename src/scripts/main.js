'use strict';

const thead = document.querySelector('thead');

thead.addEventListener('click', (e) => {
  const target = e.target;

  if (target.tagName === 'TH') {
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
      return a.cells[column].innerText - b.cells[column].innerText;
    }

    const aText = a.cells[column].innerText.toLowerCase();
    const bText = b.cells[column].innerText.toLowerCase();

    return aText.localeCompare(bText);
  });

  rows.forEach((row) => tbody.appendChild(row));
}
