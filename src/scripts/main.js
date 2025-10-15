'use strict';

// write code here
document.addEventListener('DOMContentLoaded', () => {
  const thead = document.querySelector('thead');
  const tbody = document.querySelector('tbody');

  if (!thead || !tbody) {
    return;
  }

  const numericCols = [2, 3];

  thead.addEventListener('click', (e) => {
    const th = e.target.closest('th');

    if (!th || !thead.contains(th)) {
      return;
    }

    const colIndex = Array.from(th.parentElement.children).indexOf(th);

    if (colIndex === -1) {
      return;
    }

    const rows = Array.from(tbody.rows);

    const sortedRows = rows.sort((a, b) => {
      if (!a.cells[colIndex] || !b.cells[colIndex]) {
        return 0;
      }

      const aText = a.cells[colIndex].textContent.trim();
      const bText = b.cells[colIndex].textContent.trim();

      if (numericCols.includes(colIndex)) {
        const parseNumeric = (text) => {
          const clean = text.replace(/,/g, '');
          const num = parseFloat(clean.replace(/[^\d.-]/g, ''));

          return Number.isNaN(num) ? 0 : num;
        };

        const aNum = parseNumeric(aText);
        const bNum = parseNumeric(bText);

        return aNum - bNum;
      }

      return aText.localeCompare(bText, undefined, { sensitivity: 'base' });
    });

    tbody.textContent = '';
    sortedRows.forEach((row) => tbody.appendChild(row));
  });
});
