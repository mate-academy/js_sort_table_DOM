'use strict';

const table = document.body.querySelector('table');

table.addEventListener('click', (e) => {
  const th = e.target.closest('th');

  if (!th) {
    return;
  }

  const tbody = document.body.querySelector('tbody');
  const rows = tbody.querySelectorAll('tr');
  const rowsArray = [...rows];

  const index = th.cellIndex;

  rowsArray.sort((a, b) => {
    const cellA = a.cells[index].textContent.trim();
    const cellB = b.cells[index].textContent.trim();

    const aNumber = Number(cellA);
    const bNumber = Number(cellB);

    if (!isNaN(aNumber) && !isNaN(bNumber)) {
      return aNumber - bNumber;
    } else {
      return cellA.localeCompare(cellB);
    }
  });

  tbody.innerHTML = '';

  rowsArray.forEach((row) => {
    tbody.appendChild(row);
  });
});
