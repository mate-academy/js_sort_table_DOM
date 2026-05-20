'use strict';

const table = document.querySelector('table');
const tbody = table.querySelector('tbody');
const headers = table.querySelectorAll('thead th');

function parseCellValue(value) {
  const normalized = value.trim().replaceAll('$', '').replaceAll(',', '');
  const asNumber = Number(normalized);

  if (!Number.isNaN(asNumber)) {
    return asNumber;
  }

  return normalized.toLowerCase();
}

headers.forEach((header, index) => {
  header.addEventListener('click', () => {
    const rows = Array.from(tbody.rows);

    rows.sort((a, b) => {
      const first = parseCellValue(a.cells[index].textContent);
      const second = parseCellValue(b.cells[index].textContent);

      if (first > second) {
        return 1;
      }

      if (first < second) {
        return -1;
      }

      return 0;
    });

    rows.forEach((row) => {
      tbody.append(row);
    });
  });
});
