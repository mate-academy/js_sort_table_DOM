'use strict';

const table = document.querySelector('table');
const tBody = document.querySelector('tbody');
const rows = [...tBody.querySelectorAll('tr')];

function sortByColumnIndex(index) {
  rows.sort((a, b) => {
    const cellA = a.cells[index].textContent;
    const cellB = b.cells[index].textContent;

    return cellA.localeCompare(cellB, undefined, { numeric: true });
  });

  rows.forEach((row) => tBody.appendChild(row));
}

table.addEventListener('click', (e) => {
  const th = e.target.closest('th');

  if (!th) {
    return;
  }

  const index = Array.from(th.parentElement.children).indexOf(th);

  sortByColumnIndex(index);
});
