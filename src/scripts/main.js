'use strict';

/**
 * @param {HTMLTableRowElement} row
 * @param {number} col
 * @returns {string}
 */
const getCellValue = (row, col) => {
  const cell = row.cells[col];

  return cell ? cell.textContent.trim() : '';
};

/**
 * @param {string} value
 * @returns {number|string}
 */

const toNumberIfPossible = (value) => {
  if (typeof value !== 'string' || !value) {
    return value;
  }

  const cleanedValue = value.replace(/[$,\s]/g, '');
  const number = Number(cleanedValue);

  return isNaN(number) ? value : number;
};

document.addEventListener('DOMContentLoaded', () => {
  const constructors = document.querySelectorAll('th');
  const constructorList = [...constructors];

  constructorList.forEach((element) => {
    element.addEventListener('click', () => {
      const tbody = document.querySelector('tbody');

      if (!tbody) {
        return;
      }

      const rows = [...tbody.rows];
      const col = element.cellIndex;

      rows.sort((rowA, rowB) => {
        const valueA = toNumberIfPossible(getCellValue(rowA, col));
        const valueB = toNumberIfPossible(getCellValue(rowB, col));

        if (typeof valueA === 'number' && typeof valueB === 'number') {
          return valueA - valueB;
        }

        return String(valueA).localeCompare(String(valueB));
      });

      tbody.innerHTML = '';
      rows.forEach((row) => tbody.appendChild(row));
    });
  });
});
