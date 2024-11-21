'use strict';

const table = document.querySelector('table');
const tbody = table.querySelector('tbody');

table.addEventListener('click', (e) => {
  if (e.target.tagName === 'TH') {
    const headerCells = Array.from(e.target.parentNode.children);
    const columnIndex = headerCells.indexOf(e.target);
    const sortRows = [...tbody.querySelectorAll('tr')].sort((a, b) => {
      const cellA = a.cells[columnIndex].textContent.trim();
      const cellB = b.cells[columnIndex].textContent.trim();

      const valueA = parseFloat(cellA.replace(/[$,]/g, '')) || cellA;
      const valueB = parseFloat(cellB.replace(/[$,]/g, '')) || cellB;

      if (typeof valueA === 'number' && typeof valueB === 'number') {
        return valueA - valueB;
      } else {
        return valueA.localeCompare(valueB);
      }
    });

    while (tbody.firstChild) {
      tbody.removeChild(tbody.firstChild);
    }

    tbody.append(...sortRows);
  }
});
