'use strict';

const table = document.querySelector('table');
const tableHead = table ? table.querySelector('thead') : null;
const tableBody = table ? table.querySelector('tbody') : null;

if (!table || !tableHead || !tableBody) {
}

const dataTypes = {
  0: 'string',
  1: 'string',
  2: 'number',
  3: 'currency',
};

/**
 * @param {string} value
 * @param {string} type
 * @returns {number|string}
 */
function normalizeValue(value, type) {
  if (type === 'number') {
    return parseInt(value, 10);
  }

  if (type === 'currency') {
    return parseFloat(value.replace(/[^0-9.]/g, ''));
  }

  return value.toLowerCase();
}

/**
 * Основна функція сортування таблиці.
 * @param {number} columnIndex
 */
function sortTable(columnIndex) {
  const dataType = dataTypes[columnIndex];

  const rows = Array.from(tableBody.querySelectorAll('tr'));

  rows.sort((rowA, rowB) => {
    const cellA = rowA.children[columnIndex].textContent;
    const cellB = rowB.children[columnIndex].textContent;

    const valA = normalizeValue(cellA, dataType);
    const valB = normalizeValue(cellB, dataType);

    if (valA < valB) {
      return -1;
    }

    if (valA > valB) {
      return 1;
    }

    return 0;
  });

  const fragment = document.createDocumentFragment();

  rows.forEach((row) => fragment.appendChild(row));

  tableBody.appendChild(fragment);
}

tableHead.addEventListener('click', (e) => {
  const header = e.target.closest('th');

  if (!header) {
    return;
  }

  const headerRow = header.parentNode;
  const allHeaders = Array.from(headerRow.children);
  const columnIndex = allHeaders.indexOf(header);

  sortTable(columnIndex);
});
