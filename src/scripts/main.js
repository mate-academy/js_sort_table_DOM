'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const table = document.querySelector('table');

  if (!table) {
    return;
  }

  const headers = table.querySelectorAll('th');

  headers.forEach((header, index) => {
    header.addEventListener('click', () => {
      const tbody = table.querySelector('tbody');

      if (!tbody) {
        return;
      }

      const rows = Array.from(tbody.rows);
      const indexed = rows.map((r, i) => ({ r, i }));

      indexed.sort((a, b) => {
        const rawA = (a.r.children[index]?.textContent || '').trim();
        const rawB = (b.r.children[index]?.textContent || '').trim();

        const cleanA = rawA.replace(/[^0-9.-]+/g, '');
        const cleanB = rawB.replace(/[^0-9.-]+/g, '');

        const numA =
          cleanA !== '' && Number.isFinite(Number(cleanA))
            ? Number(cleanA)
            : null;
        const numB =
          cleanB !== '' && Number.isFinite(Number(cleanB))
            ? Number(cleanB)
            : null;

        if (numA !== null && numB !== null) {
          if (numA !== numB) {
            return numA - numB;
          }
        } else if (numA !== null) {
          return -1;
        } else if (numB !== null) {
          return 1;
        } else {
          const cmp = rawA.localeCompare(rawB, undefined, {
            sensitivity: 'base',
          });

          if (cmp !== 0) {
            return cmp;
          }
        }

        return a.i - b.i;
      });

      indexed.forEach(({ r }) => tbody.appendChild(r));
    });
  });
});
