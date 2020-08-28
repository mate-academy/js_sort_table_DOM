'use strict';

// write code here
const thead = document.querySelector('thead');
const tbody = document.querySelector('tbody');

thead.addEventListener('click', (event) => {
  const th = event.target.closest('th');

  if (!th) {
    return;
  }

  const column = th.cellIndex;
  const rows = [...tbody.children];

  rows.sort((a, b) => {
    const A = a.cells[column].innerText;
    const B = b.cells[column].innerText;

    if (column === 3) {
      return +(A.replace(/[$,]/g, '')) - +(B.replace(/[$,]/g, ''));
    } else {
      return A.localeCompare(B);
    }
  });

  for (const row of rows) {
    tbody.appendChild(row);
  };
});
