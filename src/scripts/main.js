'use strict';

const table = document.querySelector('table');
const tableHead = table ? table.querySelector('thead') : null;
const tableBody = table ? table.querySelector('tbody') : null;

// 1. Оголошення функцій перенесено на кореневий рівень
/**
 * Функція нормалізації значення для коректного сортування.
 * @param {string} value - Текстове значення комірки.
 * @param {string} type - Тип даних ('string', 'number', 'currency').
 * @returns {number|string} - Числове або нормалізоване текстове значення.
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
 * Основна функція сортування таблиці (ASC).
 * @param {number} columnIndex - Індекс колонки для сортування.
 */
function sortTable(columnIndex) {
  const dataTypes = {
    0: 'string',
    1: 'string',
    2: 'number',
    3: 'currency',
  };

  const dataType = dataTypes[columnIndex];

  const rows = Array.from(tableBody.querySelectorAll('tr'));

  // ... (решта логіки sortTable)
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

if (table && tableHead && tableBody) {
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
}
