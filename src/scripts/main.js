'use strict';

document.addEventListener('click', (e) => {
  if (!e.target.closest('th')) {
    return;
  }

  const th = e.target.closest('th');

  const idx = th.cellIndex;

  const body = document.querySelector('tbody');
  const tr = body.querySelectorAll('tr');
  const rows = Array.from(tr);

  function getValue(row, i) {
    const cell = row.cells[i];
    const text = cell ? cell.textContent.trim() : '';

    if (text === '') {
      return '';
    }

    const cleaned = text.replace(',', '.').replace(/[^0-9.-]/g, '');

    if (cleaned === '') {
      return text.toLowerCase();
    }

    const parsed = parseFloat(cleaned);

    if (!isNaN(parsed)) {
      return parsed;
    } else {
      return text.toLowerCase();
    }
  }

  const newRows = Array.from(rows);

  newRows.sort((a, b) => {
    const aVal = getValue(a, idx);
    const bVal = getValue(b, idx);

    const aIsNum = typeof aVal === 'number' && !isNaN(aVal);
    const bIsNum = typeof bVal === 'number' && !isNaN(bVal);

    if (aIsNum && bIsNum) {
      return aVal - bVal;
    } else {
      return String(aVal).localeCompare(String(bVal), undefined, {
        sensitivity: 'base',
      });
    }
  });

  body.textContent = '';
  newRows.forEach((r) => body.appendChild(r));
});
