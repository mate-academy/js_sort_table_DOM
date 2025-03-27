'use strict';

const headers = document.querySelectorAll('thead tr th');

headers.forEach((element) => {
  element.addEventListener('click', handleClick);
});

function handleClick() {
  const tbody = document.querySelector('tbody');
  const rows = Array.from(document.querySelectorAll('tbody tr'));
  const cellIndex = event.target.cellIndex;

  rows.sort((rowA, rowB) => {
    const valueA = rowA.cells[cellIndex].textContent;
    const valueB = rowB.cells[cellIndex].textContent;

    if (!isNaN(valueA) && !isNaN(valueB)) {
      return Number(valueA) - Number(valueB);
    } else {
      return valueA.localeCompare(valueB);
    }
  });

  rows.forEach((row) => {
    tbody.appendChild(row);
  });
}
