'use strict';

const table = document.querySelector('table');
const headers = document.querySelectorAll('th');
const tbody = table.querySelector('tbody');

table.querySelector('thead').addEventListener('click', (e) => {
  const th = e.target.closest('th');
  if(!th) return;

  const colIndex = Array.from(headers).indexOf(th);
  const rows = Array.from(tbody.querySelectorAll('tr'));

  rows.sort((rowA, rowB) => {
  const cellA = rowA.children[colIndex].textContent.trim();
  const cellB = rowB.children[colIndex].textContent.trim();

  return cellA.localeCompare(cellB, 'uk', { numeric : true});
});

tbody.append(...rows);

})
