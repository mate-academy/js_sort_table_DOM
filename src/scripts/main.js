'use strict';

const table = document.querySelector('table');
const header = document.getElementsByTagName('th');
const items = Array.from(header);
const tbody = table.querySelector('tbody');

table.addEventListener('click', (ev) => {
  if (ev.target && ev.target.tagName === 'TH') {
    const index = items.indexOf(ev.target);

    const tableRow = tbody.getElementsByTagName('tr');
    const rowArr = Array.from(tableRow);

    rowArr.sort((a, b) => {
      const cellA = a.cells[index].textContent.replace(/[$,]/g, '').trim();
      const cellB = b.cells[index].textContent.replace(/[$,]/g, '').trim();

      if (isNaN(cellA)) {
        return cellA.localeCompare(cellB);
      } else {
        return Number(cellA) - Number(cellB);
      }
    });

    for (const row of rowArr) {
      tbody.appendChild(row);
    }
  }
});
