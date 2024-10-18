'use strict';

const table = document.querySelector('table');
const headers = table.querySelectorAll('th');
const tbody = table.querySelector('tbody');
const rows = Array.from(tbody.querySelectorAll('tr'));

const convertToNumber = (str) => {
  if (typeof str === 'string') {
    return Number(str.replace(/[^0-9.-]+/g, ''));
  }

  return NaN;
};

const sortTable = (columnIndex) => {
  return rows.sort((a, b) => {
    const aValue = a.children[columnIndex].textContent.trim();
    const bValue = b.children[columnIndex].textContent.trim();

    if (columnIndex === 2 || columnIndex === 3) {
      return convertToNumber(aValue) - convertToNumber(bValue);
    } else {
      return aValue.localeCompare(bValue);
    }
  });
};

const upDateTable = (sortedRows) => {
  tbody.innerHTML = '';
  sortedRows.forEach((row) => tbody.appendChild(row));
};

headers.forEach((header, index) => {
  header.addEventListener('click', () => {
    const sortedRows = sortTable(index);

    upDateTable(sortedRows);
  });
});
