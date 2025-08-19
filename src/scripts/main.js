// src/scripts/main.js
'use strict';

document.addEventListener('DOMContentLoaded', () => {
  // eslint-disable-next-line max-len
  const table = document.querySelector('table');

  // eslint-disable-next-line curly
  if (!table) return;

  const thead = table.tHead || table.querySelector('thead');
  const tbody = table.tBodies[0] || table.querySelector('tbody');

  // eslint-disable-next-line curly
  if (!thead || !tbody) return;

  thead.addEventListener('click', (e) => {
    const th = e.target.closest('th');

    // eslint-disable-next-line curly
    if (!th) return;

    const ths = Array.from(thead.querySelectorAll('th'));
    const colIndex = ths.indexOf(th);

    // eslint-disable-next-line curly
    if (colIndex < 0) return;

    const rows = Array.from(tbody.rows);

    // допоміжні — дістаємо значення клітинки і визначаємо тип
    const getCellValue = (tr, idx) => tr.cells[idx]?.textContent.trim() ?? '';

    // eslint-disable-next-line prettier/prettier
    const isNumberColumn = rows.every(tr => {
      const v = getCellValue(tr, colIndex).replace(',', '.');

      return v === '' || !Number.isNaN(parseFloat(v));
    });

    // eslint-disable-next-line max-len
    const collator = new Intl.Collator(undefined, {
      numeric: true,
      sensitivity: 'base',
    });

    rows.sort((a, b) => {
      const vaRaw = getCellValue(a, colIndex);
      const vbRaw = getCellValue(b, colIndex);

      if (isNumberColumn) {
        const va = parseFloat(vaRaw.replace(',', '.')) || 0;
        const vb = parseFloat(vbRaw.replace(',', '.')) || 0;

        return va - vb;
      }

      return collator.compare(vaRaw, vbRaw); // ASC для тексту
    });

    // перезаписуємо відсортовані рядки у tbody
    const frag = document.createDocumentFragment();

    // eslint-disable-next-line prettier/prettier
    rows.forEach(tr => frag.appendChild(tr));
    tbody.appendChild(frag);
  });
});
