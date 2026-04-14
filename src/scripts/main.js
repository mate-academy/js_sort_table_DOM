'use strict';

const table = document.querySelector('table');
const tbody = table.querySelector('tbody');

table.addEventListener('click', (eventEl) => {
  const th = eventEl.target.closest('th');

  if (!th) {
    return;
  }

  const headerRow = th.parentNode;
  const columnIndex = [...headerRow.children].indexOf(th);
  const rows = [...tbody.querySelectorAll('tr')];

  const sortedRows = rows.sort((rowA, rowB) => {
    const cellA = rowA.children[columnIndex].textContent.trim();
    const cellB = rowB.children[columnIndex].textContent.trim();

    const valueA = getComparableValue(cellA);
    const valueB = getComparableValue(cellB);

    if (valueA > valueB) {
      return 1;
    }

    if (valueA < valueB) {
      return -1;
    }

    return 0;
  });

  tbody.append(...sortedRows);
});

function getComparableValue(value) {
  const cleanedValue = value.replace(/[$,]/g, '');
  const numericValue = Number(cleanedValue);

  if (!Number.isNaN(numericValue)) {
    return numericValue;
  }

  return value.toLowerCase();
}
