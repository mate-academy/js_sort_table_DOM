'use strict';

// write code here
const mainTable = document.querySelector('table');

mainTable.addEventListener('click', (e) => {
  const header = e.target.closest('th');

  if (!header) {
    return;
  }

  const headers = mainTable.querySelector('thead').querySelectorAll('th');
  const index = [...headers].indexOf(header);
  const tbody = mainTable.querySelector('tbody');
  const rows = Array.from(mainTable.rows).slice(1);

  rows.sort((a, b) => sortFunction(a, b, index));

  tbody.innerHTML = '';

  rows.forEach((row) => tbody.appendChild(row));
});

function sortFunction(a, b, index) {
  let valueA = a.cells[index].innerText;
  let valueB = b.cells[index].innerText;

  if (!Number.isNaN(+valueA) && !Number.isNaN(+valueB)) {
    return valueA - valueB;
  }

  if (valueA[0] === '$') {
    valueA = valueA.slice(1).split(',').join('');
    valueB = valueB.slice(1).split(',').join('');

    return valueA - valueB;
  }

  return valueA.localeCompare(valueB, undefined, { sensitivity: 'base' });
}
