'use strict';

const table = document.querySelector('table');
const thead = table.querySelector('thead');

thead.addEventListener('click', (e) => {
  const th = e.target.closest('th');

  if (!th) {
    return;
  }

  const columnIndex = Array.from(th.parentNode.children).indexOf(th);

  sortTable(columnIndex);
});

function sortTable(columnIndex) {
  const tbody = table.querySelector('tbody');
  const rows = Array.from(tbody.querySelectorAll('tr'));

  rows.sort((a, b) => {
    const aValue = a.cells[columnIndex]
      ? a.cells[columnIndex].textContent.trim()
      : '';
    const bValue = b.cells[columnIndex]
      ? b.cells[columnIndex].textContent.trim()
      : '';

    const aClean = aValue.replace(/[^\d.-]/g, '');
    const aNumber = aClean === '' ? NaN : Number(aClean);
    const bClean = bValue.replace(/[^\d.-]/g, '');
    const bNumber = bClean === '' ? NaN : Number(bClean);

    if (!isNaN(aNumber) && !isNaN(bNumber)) {
      return aNumber - bNumber;
    }

    return aValue.localeCompare(bValue, undefined, { sensitivity: 'base' });
  });

  rows.forEach((row) => tbody.appendChild(row));
}
