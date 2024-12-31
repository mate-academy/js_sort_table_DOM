'use strict';

// Беремо всі хедери у масив, щоб додати до кожного ивент
const headers = [...document.querySelectorAll('th')];

for (let i = 0; i < 4; i++) {
  headers[i].addEventListener('click', () => {
    const tbody = document.querySelector('tbody');
    const rows = [...tbody.querySelectorAll('tr')];

    rows.sort((rowA, rowB) => {
      const rowNumberA = parseFloat(rowA.cells[i].innerHTML.replace('$', ''));
      const rowNumberB = parseFloat(rowB.cells[i].innerHTML.replace('$', ''));

      if (rowNumberA && rowNumberB) {
        return rowNumberA - rowNumberB;
      } else {
        return rowA.cells[i].innerHTML.localeCompare(rowB.cells[i].innerHTML);
      }
    });

    for (const row of rows) {
      document.querySelector('tbody').appendChild(row);
    }
  });
}
