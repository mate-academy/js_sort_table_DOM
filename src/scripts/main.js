'use strict';

const head = document.querySelector('thead');
const headers = head.querySelectorAll('th');

function sortTable(count) {
  const table = document.querySelector('tbody');
  const rows = [...table.querySelectorAll('tr')];

  rows.sort(
    (a, b) =>
      a.cells[count].textContent.trim() - b.cells[count].textContent.trim(),
  );

  rows.forEach((row) => table.appendChild(row));
}

headers.forEach((header) => {
  header.addEventListener('click', () => {
    const counter = [...headers].indexOf(header);

    sortTable(counter);
  });
});

// console.log(Array.from(rows));
