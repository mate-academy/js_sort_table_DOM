'use strict';

const theah = document.querySelector('thead');
const tbody = document.querySelector('tbody');

theah.addEventListener('click', (elem) => {
  if (elem.target.tagName === 'TH') {
    const columnIndex = elem.target.cellIndex;
    
    const rows = Array.from(tbody. rows);

    const sorted = rows.sort((rowA, rowB) => {
      const cellA = rowA.cells[columnIndex].textContent.trim();
      const cellB = rowB.cells[columnIndex].textContent.trim();
    
      return cellA.localeCompare(cellB, 'uk', { numeric: true });
    })

    tbody.innerHTML = '';
    sorted.forEach((row) => tbody.appendChild(row));
  }
} )

