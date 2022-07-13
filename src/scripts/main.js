'use strict';

const table = document.querySelector('table');
const thead = table.querySelector('thead');
const tbody = table.querySelector('tbody');
const rows = [...tbody.rows];
const headers = thead.querySelectorAll('th');

const convertToNumber = (string) => {
  return +string.split('$').join('').split(',').join('');
};

for (const header of headers) {
  header.className = 'header';
}

table.addEventListener('click', (e) => {
  const header = e.target.closest('.header');

  if (!header) {
    return;
  }

  const index = header.cellIndex;

  rows.sort((a, b) => header.innerText === 'Salary'
    ? convertToNumber(a.cells[index].innerText)
      - convertToNumber(b.cells[index].innerText)
    : a.cells[index].innerText.localeCompare(b.cells[index].innerText));

  tbody.innerHTML = '';
  rows.forEach(row => tbody.append(row));
});
