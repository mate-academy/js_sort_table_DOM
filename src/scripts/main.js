'use strict';

const headers = document.querySelectorAll('thead th');
const tbody = document.querySelector('tbody');

const getCellValue = (row, index) => {
  const cellText = row.children[index].innerText;

  return cellText.startsWith('$')
    ? parseFloat(cellText.replace(/[$,]/g, ''))
    : cellText;
};

headers.forEach((header, index) => {
  header.addEventListener('click', () => {
    const rows = Array.from(tbody.querySelectorAll('tr'));

    rows.sort((rowA, rowB) => {
      const cellA = getCellValue(rowA, index);
      const cellB = getCellValue(rowB, index);

      return typeof cellA === 'number' && typeof cellB === 'number'
        ? cellA - cellB
        : cellA.localeCompare(cellB);
    });

    tbody.innerHTML = '';
    rows.forEach((row) => tbody.appendChild(row));
  });
});
