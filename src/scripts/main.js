'use strict';

const table = document.querySelector('table');
const tbody = document.querySelector('tbody');

table.addEventListener('click', (e) => {
  if (e.target.tagName !== 'TH') {
    return;
  }

  const index = e.target.cellIndex;
  const rows = Array.from(tbody.querySelectorAll('tr'));

  const isNumericColumn = index === 2 || index === 3;

  rows.sort((a, b) => {
    const aValue = a.children[index].textContent.trim();
    const bValue = b.children[index].textContent.trim();

    if (isNumericColumn) {
      return (
        Number(aValue.replace(/[$,]/g, '')) -
        Number(bValue.replace(/[$,]/g, ''))
      );
    }

    return aValue.localeCompare(bValue);
  });

  tbody.append(...rows);
});
