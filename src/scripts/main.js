'use strict';

// write code here
const theads = document.querySelectorAll('th');
const tbody = document.querySelector('tbody');

function parceMoney(value) {
  return Number(value.replaceAll('$', '').replaceAll(',', ''));
}

theads.forEach((thead, headerIndex) => {
  thead.addEventListener('click', () => {
    const rowsArray = Array.from(tbody.querySelectorAll('tr'));

    rowsArray.sort((rowA, rowB) => {
      const cellA = rowA.cells[headerIndex].textContent.trim();
      const cellB = rowB.cells[headerIndex].textContent.trim();

      if (parceMoney(cellA) || parceMoney(cellA) === 0) {
        return parceMoney(cellA) - parceMoney(cellB);
      }

      return cellA.localeCompare(cellB, 'uk');
    });

    rowsArray.forEach((row) => tbody.appendChild(row));
  });
});
