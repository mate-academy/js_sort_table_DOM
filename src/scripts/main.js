'use strict';

'use strict';

const table = document.querySelector('table');
const tbody = table.tBodies[0];
const headers = table.querySelectorAll('thead th, tfoot th');

function parseDate(str) {
  const s = str.trim();

  if (!s) {
    return 0;
  }

  const timestamp = Date.parse(s);

  if (!Number.isNaN(timestamp)) {
    return timestamp;
  }

  const m = s.match(/^(\d{1,2})[/. -](\d{1,2})[/. -](\d{2,4})$/);

  if (m) {
    const [, a, b, c] = m;
    const yyyy = c.length === 2 ? `20${c}` : c;
    const mm = Number(a) > 12 ? b.padStart(2, '0') : a.padStart(2, '0');
    const dd = Number(a) > 12 ? a.padStart(2, '0') : b.padStart(2, '0');
    const parsed = Date.parse(`${yyyy}-${mm}-${dd}`);

    if (!Number.isNaN(parsed)) {
      return parsed;
    }
  }

  return 0;
}

function parseSalary(str) {
  const cleaned = str.replace(/[^\d.]/g, '');

  return Number(cleaned) || 0;
}

headers.forEach((th) => {
  th.addEventListener('click', () => {
    const colIndex = th.cellIndex;
    const rows = Array.from(tbody.querySelectorAll('tr'));

    rows.sort((rowA, rowB) => {
      const a = rowA.cells[colIndex].textContent.trim();
      const b = rowB.cells[colIndex].textContent.trim();

      if (colIndex === 3) {
        return Number(a) - Number(b);
      }

      if (colIndex === 4) {
        return parseDate(a) - parseDate(b);
      }

      if (colIndex === 5) {
        return parseSalary(a) - parseSalary(b);
      }

      return a.localeCompare(b);
    });

    tbody.innerHTML = '';
    rows.forEach((row) => tbody.appendChild(row));
  });
});
