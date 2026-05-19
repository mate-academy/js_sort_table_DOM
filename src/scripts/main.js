'use strict';

const table = document.querySelector('table');
const tbody = document.querySelector('tbody');
const rows = Array.from(tbody.querySelectorAll('tr'));


table.addEventListener('click', (e) => {
  const th = e.target.closest('th');

  if (!th) {
    return;
  }

  const columnIndex = th.cellIndex;

rows.sort((a, b) => {
  const valueA = a.cells[columnIndex].textContent.trim();
  const valueB = b.cells[columnIndex].textContent.trim();
  const cleanedA = valueA.replace('$', '').replace(',', '');
  const cleanedB = valueB.replace('$', '').replace(',', '');
  const numA = Number(cleanedA);
  const numB = Number(cleanedB);
  if (!Number.isNaN(numA) && !Number.isNaN(numB)) {
    return numA - numB;
  }
  return valueA.localeCompare(valueB);
});


  rows.forEach((row) => tbody.appendChild(row));
});
