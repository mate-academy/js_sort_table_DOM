'use strict';

const tableHeader = Array.from(
  document.querySelector('thead').querySelectorAll('th'),
);

const tbody = document.querySelector('tbody');
const rows = Array.from(tbody.rows);

function sortRows(r, sortHeader) {
  let srt;
  let cI;

  switch (sortHeader) {
    case 'Name':
      srt = (a, b) => a.localeCompare(b);
      cI = 0;
      break;
    case 'Position':
      srt = (a, b) => a.localeCompare(b);
      cI = 1;
      break;
    case 'Age':
      srt = (a, b) => a - b;
      cI = 2;
      break;
    case 'Salary':
      srt = (a, b) =>
        parseInt(a.replace('$', '').replace(',', '')) -
        parseInt(b.replace('$', '').replace(',', ''));
      cI = 3;
      break;
  }

  if (srt) {
    r.sort((a, b) => srt(a.cells[cI].innerText, b.cells[cI].innerText));
  }
}

tableHeader.forEach((th) => {
  th.addEventListener('click', (e) => {
    sortRows(rows, e.target.textContent);

    tbody.replaceChildren();
    rows.forEach((row) => tbody.appendChild(row));
  });
});
