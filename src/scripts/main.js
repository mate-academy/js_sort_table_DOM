'use strict';

document.addEventListener('click', function (e) {
  const header = e.target.closest('th');
  const tbody = document.querySelector('tbody');

  if (!header) {
    return undefined;
  }

  const column = Array.from(tbody.rows).map((el) => el.cells[header.cellIndex]);
  let sortCol;

  switch (header.dataset.type) {
    case 'string':
      sortCol = (a, b) => {
        return a.textContent.localeCompare(b.textContent);
      };
      break;
    case 'number':
      sortCol = (a, b) => {
        return +a.textContent - parseInt(b.textContent);
      };
      break;
    case 'money':
      sortCol = (a, b) => {
        const first = parseFloat(a.textContent.trim().slice(1));
        const second = parseFloat(b.textContent.trim().slice(1));

        return first - second;
      };
      break;
  }
  column.sort(sortCol);

  column.forEach((cell, index) => {
    tbody.appendChild(cell.parentNode);
  });
});
