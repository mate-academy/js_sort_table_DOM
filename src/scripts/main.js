'use strict';

function parseSalary(salaryString) {
  return Number(salaryString.replace(/[^0-9.-]+/g, ''));
}

// Common sorting function
function sortTable(columnIndex, dataType = 'text') {
  const rows = Array.from(tbody.querySelectorAll('tr'));

  rows.sort((a, b) => {
    const cellA = a
      .querySelector(`td:nth-child(${columnIndex})`)
      .textContent.trim();
    const cellB = b
      .querySelector(`td:nth-child(${columnIndex})`)
      .textContent.trim();

    if (dataType === 'number') {
      return parseSalary(cellA) - parseSalary(cellB); // Numeric sorting
    }

    // Default alphabetical sorting
    const textA = cellA.toLowerCase();
    const textB = cellB.toLowerCase();

    return textA.localeCompare(textB); // Locale-aware string comparison
  });

  // Rebuild the table with sorted rows
  tbody.innerHTML = '';
  rows.forEach((row) => tbody.appendChild(row));
}

// Select headers and table body
const tbody = document.querySelector('tbody');
const theadName = document.querySelector('thead > tr > th:nth-child(1)');
const theadPosition = document.querySelector('thead > tr > th:nth-child(2)');
const theadAge = document.querySelector('thead > tr > th:nth-child(3)');
const theadSalary = document.querySelector('thead > tr > th:nth-child(4)');

// Event listeners for sorting
theadName.addEventListener('click', () => sortTable(1, 'text'));
theadPosition.addEventListener('click', () => sortTable(2, 'text'));
theadAge.addEventListener('click', () => sortTable(3, 'number'));
theadSalary.addEventListener('click', () => sortTable(4, 'number'));
