'use strict';

(function () {
  const table = document.querySelector('table');

  if (!table) {
    return;
  }

  const thead = table.tHead;
  const tfoot = table.tFoot;
  const tbody = table.tBodies[0];

  if (!tbody) {
    return;
  }

  const headerTextAt = (colIdx) =>
    thead?.querySelectorAll('th')[colIdx]?.textContent.trim().toLowerCase() ??
    '';

  const getTypeForColumn = (colIdx) => {
    const headerName = headerTextAt(colIdx);

    return headerName === 'age' || headerName === 'salary'
      ? 'number'
      : 'string';
  };

  const getCellText = (tr, colIdx) =>
    tr.children[colIdx]?.textContent.trim() ?? '';

  const toNumber = (value) => Number(value.replace(/[^\d.-]/g, '') || 0);

  const sortByColumn = (colIdx) => {
    const type = getTypeForColumn(colIdx);
    const rows = Array.from(tbody.querySelectorAll('tr')).map((row, i) => [
      row,
      i,
    ]);

    rows.sort((a, b) => {
      const avRaw = getCellText(a[0], colIdx);
      const bvRaw = getCellText(b[0], colIdx);

      let cmp;

      if (type === 'number') {
        cmp = toNumber(avRaw) - toNumber(bvRaw);
      } else {
        cmp = avRaw.localeCompare(bvRaw, undefined, { sensitivity: 'base' });
      }

      return cmp !== 0 ? cmp : a[1] - b[1];
    });

    const frag = document.createDocumentFragment();

    rows.forEach(([row]) => frag.appendChild(row));
    tbody.appendChild(frag);
  };

  const onHeaderClick = (e) => {
    const th = e.target.closest('th');

    if (!th) {
      return;
    }

    const tr = th.parentElement;
    const colIdx = Array.prototype.indexOf.call(tr.children, th);

    if (colIdx < 0) {
      return;
    }

    sortByColumn(colIdx);
  };

  if (thead) {
    thead.addEventListener('click', onHeaderClick);
  }

  if (tfoot) {
    tfoot.addEventListener('click', onHeaderClick);
  }
})();
