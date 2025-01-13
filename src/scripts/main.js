'use strict';

// eslint-disable-next-line no-shadow
function sortTable(columnIndex = 0, table) {
  const tbody = table.querySelector('tbody');
  const rows = Array.from(tbody.querySelectorAll('tr'));

  rows.sort((a, b) => {
    const aText = a.querySelector(
      `td:nth-child(${columnIndex + 1})`,
    ).textContent;
    const bText = b.querySelector(
      `td:nth-child(${columnIndex + 1})`,
    ).textContent;

    const aValue = parseFloat(aText.replace(/[$,]/g, ''));
    const bValue = parseFloat(bText.replace(/[$,]/g, ''));

    if (!isNaN(aValue) && !isNaN(bValue)) {
      return aValue - bValue;
    }

    return aText.localeCompare(bText);
  });

  rows.forEach((row) => tbody.appendChild(row));
}

const table = document.querySelector('table');

sortTable(3, table);

table.addEventListener('click', (ev) => {
  const th = ev.target.closest('th');

  if (th) {
    const columnIndex = Array.from(th.parentNode.children).indexOf(th);

    sortTable(columnIndex, table);
  }
});
