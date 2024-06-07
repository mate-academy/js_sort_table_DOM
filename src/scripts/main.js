'use strict';

const tbody = document.querySelector('tbody');
const title = document.querySelector('thead');

const rows = [...tbody.querySelectorAll('tr')];

title.addEventListener('click', (e) => {
  const value = e.target.closest('th').textContent.toLowerCase();

  const intex = e.target.cellIndex;
  const cells = [];

  tbody.querySelectorAll('tr').forEach((item) => {
    cells.push(item.cells[intex].textContent);
  });

  const newRows = rows.sort((a, b) => {
    const cellsA = a.cells[intex].textContent;
    const cellsB = b.cells[intex].textContent;

    switch (value) {
      case 'name':
      case 'position':
        return cellsA.localeCompare(cellsB);

      case 'age':
        return cellsA - cellsB;

      case 'salary':
        return (
          +cellsA.replace(',', '').slice(1) - +cellsB.replace(',', '').slice(1)
        );

      default:
        return null;
    }
  });

  tbody.innerHTML = '';

  newRows.forEach((item) => {
    tbody.appendChild(item);
  });
});
