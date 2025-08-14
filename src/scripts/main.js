'use strict';

function sortByASC(columnIndex) {
  const rows = document.querySelectorAll('tbody tr');

  const sortedRows = Array.from(rows).sort((a, b) => {
    const aValue = a.querySelectorAll('td')[columnIndex].textContent;
    const bValue = b.querySelectorAll('td')[columnIndex].textContent;

    const aNum = parseFloat(aValue);
    const bNum = parseFloat(bValue);

    if (!isNaN(aNum) && !isNaN(bNum)) {
      return aNum - bNum;
    }

    return aValue.localeCompare(bValue, undefined, { numeric: true });
  });

  const tbody = document.querySelector('tbody');

  tbody.innerHTML = '';

  sortedRows.forEach((row) => {
    tbody.appendChild(row);
  });
}

const tHeads = document.querySelectorAll('thead th');

tHeads.forEach((th) => {
  th.addEventListener('click', (e) => {
    const columnIndex = Array.from(tHeads).indexOf(th);

    sortByASC(columnIndex);
  });
});
