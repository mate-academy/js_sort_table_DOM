'use strict';

const sortable = document.querySelectorAll('.sortable');
const tbody = document.querySelector('tbody');

sortable.forEach((th) => {
  th.addEventListener('click', (e) => {
    const clickedTh = e.currentTarget;
    const allTh = Array.from(clickedTh.parentElement.children);
    const index = allTh.indexOf(clickedTh);

    const rows = Array.from(tbody.querySelectorAll('tr'));
    const getCellText = (row, idx) => row.children[idx]?.textContent?.trim();

    const parseNumber = (s) => {
      const cleaned = s.replace(/[^\d.-]+/g, '');

      return cleaned === '' ? NaN : Number(cleaned);
    };

    const isNumberColumn = (rowList, idx) => {
      const first = rowList.find((r) => {
        const text = r.children[idx]?.textContent?.trim();

        return text !== undefined && text !== '';
      });

      if (!first) {
        return false;
      }

      const val = parseNumber(getCellText(first, idx));

      return !Number.isNaN(val);
    };

    const numberCol = isNumberColumn(rows, index);

    rows.sort((a, b) => {
      const at = getCellText(a, index);
      const bt = getCellText(b, index);

      if (numberCol) {
        const na = parseNumber(at);
        const nb = parseNumber(bt);

        if (Number.isNaN(na) && Number.isNaN(nb)) {
          return 0;
        }

        if (Number.isNaN(na)) {
          return 1;
        }

        if (Number.isNaN(nb)) {
          return -1;
        }

        return na - nb;
      }

      return at.localeCompare(bt);
    });
    tbody.innerHTML = '';
    tbody.append(...rows);
  });
});
