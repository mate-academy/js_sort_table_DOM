'use strict';

const headers = document.querySelector('thead');
const arrayTh = Array.from(document.querySelectorAll('thead th'));
const tbody = document.querySelector('tbody');

headers.addEventListener('click', (e) => {
  const th = e.target.closest('th');

  if (!th) {
    return;
  }

  const columnIndex = arrayTh.indexOf(th);

  const rows = Array.from(document.querySelectorAll('tbody tr'));
  const data = rows.map((row) => {
    const td = row.cells[columnIndex];

    return {
      row: row,
      value: td.textContent.trim(),
    };
  });

  data.sort((a, b) => {
    const numA = parseFloat(a.value.replace(/[^0-9.-]/g, ''));
    const numB = parseFloat(b.value.replace(/[^0-9.-]/g, ''));

    if (!isNaN(numA) && !isNaN(numB)) {
      return numA - numB;
    }

    return a.value.localeCompare(b.value);
  });

  data.forEach((item) => {
    tbody.appendChild(item.row);
  });
});
