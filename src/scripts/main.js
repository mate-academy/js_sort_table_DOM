'use strict';

const queryOne = (selector) => document.querySelector(selector);

const getElementIndex = (nodeList, node) => [...nodeList].indexOf(node);

const extractNumber = (str) => {
  const digits = `${str}`.replace(/\D/g, '');

  return digits === '' ? NaN : +digits;
};

const sortRowsAscCopy = (rowsArr) => {
  return rowsArr.slice().sort((a, b) => {
    const normalizedNumA = extractNumber(a.value);
    const normalizedNumB = extractNumber(b.value);

    const aNum = Number.isFinite(normalizedNumA);
    const bNum = Number.isFinite(normalizedNumB);

    if (aNum && !bNum) {
      return -1;
    }

    if (!aNum && bNum) {
      return 1;
    }

    if (aNum && bNum) {
      if (normalizedNumA === normalizedNumB) {
        return a.idx - b.idx;
      }

      return normalizedNumA - normalizedNumB;
    }

    const cmp = String(a.value).localeCompare(String(b.value), undefined, {
      sensitivity: 'base',
    });

    return cmp === 0 ? a.idx - b.idx : cmp;
  });
};

const getCellText = (row, idx) => {
  return row.children[idx].textContent.replace(/\u00A0/g, ' ').trim();
};

const getRowsArray = (rows, numberColumn) => {
  return [...rows].map((tr, idx) => ({
    el: tr,
    idx,
    value: getCellText(tr, numberColumn),
  }));
};

const updateTbody = (tbody, newOrder) => {
  const frag = document.createDocumentFragment();

  newOrder.forEach((o) => frag.append(o.el));
  tbody.replaceChildren(frag);
};

const onHeaderClick = (e, headers, tbody) => {
  const th = e.target.closest('th');

  if (!th) {
    return;
  }

  const numberColumn = getElementIndex(headers, th);

  if (numberColumn === -1) {
    return;
  }

  headers.forEach((h) => h.classList.remove('sorted-asc', 'sorted-desc'));
  th.classList.add('sorted-asc');

  const rowsArr = getRowsArray(tbody.rows, numberColumn);

  const newOrder = sortRowsAscCopy(rowsArr);

  updateTbody(tbody, newOrder);
};

(() => {
  const thead = queryOne('table thead');
  const tbody = queryOne('tbody');

  if (!thead || !tbody) {
    return;
  }

  const headers = thead.querySelectorAll('th');

  thead.addEventListener('click', (e) => {
    onHeaderClick(e, headers, tbody);
  });
})();
