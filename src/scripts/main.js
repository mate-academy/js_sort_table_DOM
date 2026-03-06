'use strict';

const table = document.querySelector('table');
const tbody = table.querySelector('tbody');
const headers = table.querySelectorAll('thead th');

headers.forEach((header, columnIndex) => {
  header.addEventListener('click', () => {
    handleSort(columnIndex);
  });
});

function handleSort(colIndex) {
  const rows = Array.from(tbody.querySelectorAll('tr'));
  const sortedRows = rows.sort((a, b) => {
    const aText = a.querySelectorAll('td')[colIndex].textContent.trim();
    const bText = b.querySelectorAll('td')[colIndex].textContent.trim();

    if (colIndex === 2 || colIndex === 3) {
      const aVal = parseFloat(aText.replace(/[^0-9.-]/g, ''));
      const bVal = parseFloat(bText.replace(/[^0-9.-]/g, ''));

      return aVal - bVal;
    } else {
      return aText > bText ? 1 : -1;
    }
  });

  tbody.innerHTML = '';
  tbody.append(...sortedRows);
}
