'use strict';

const targetHeadings = document.querySelectorAll('th');

for (let i = 0; i < targetHeadings.length; i++) {
  targetHeadings[i].addEventListener('click', () => {
    sortColumn(i);
  });
}

const tbody = document.querySelector('table tbody');
const rows = [...tbody.querySelectorAll('tr')];

function sortColumn(index) {
  rows.sort((a, b) => {
    const aParams = a.cells[index].textContent;
    const bParams = b.cells[index].textContent;

    return aParams.localeCompare(bParams, undefined, { numeric: true });
  });

  tbody.innerHTML = '';
  rows.forEach((row) => tbody.append(row));
}
