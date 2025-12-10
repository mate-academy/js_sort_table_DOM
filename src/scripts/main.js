'use strict';

const tbody = document.querySelector('tbody');
const heads = document.querySelectorAll('thead th');

heads.forEach((th, index) => {
  th.addEventListener('click', () => {
    sortByColumn(index);
  });
});

function sortByColumn(columnIndex) {
  const rows = Array.from(tbody.querySelectorAll('tr'));

  const prepared = rows.map((row) => {
    const cellText = row.children[columnIndex].textContent.trim();
    const num = parseFloat(cellText.replace(/[^\d.-]/g, ''));

    return {
      row,
      value: !Number.isNaN(num) ? num : cellText.toLowerCase(),
    };
  });

  prepared.sort((a, b) => {
    if (typeof a.value === 'number' && typeof b.value === 'number') {
      return a.value - b.value;
    }

    return a.value.localeCompare(b.value);
  });

  tbody.innerHTML = '';
  prepared.forEach((item) => tbody.appendChild(item.row));
}
