'use strict';

// write code here
const thead = document.querySelector('thead');
const tbody = document.querySelector('tbody');

thead.addEventListener('click', (event) => {
  const item = event.target.closest('th');

  if (!item) {
    return;
  }

  const column = item.cellIndex;
  const rows = [...tbody.children];

  rows.sort((a, b) => {
    const valueA = a.cells[column].innerText;
    const valueB = b.cells[column].innerText;

    if (column === 3) {
      return +(valueA.replace(/[$,]/g, '')) - +(valueB.replace(/[$,]/g, ''));
    } else {
      return valueA.localeCompare(valueB);
    }
  });

  for (const row of rows) {
    tbody.appendChild(row);
  };
});
