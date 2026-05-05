'use strict';

// write code here
const table = document.querySelector('table');
const headers = table.querySelectorAll('th');
const tbody = table.querySelector('tbody');

function parseSalary(value) {
  return Number(value.replace('$', '').replace(',', ''));
}

function sortTable(columnIndex) {
  const rows = Array.from(tbody.querySelectorAll('tr'));

  const sortedRows = rows.sort((a, b) => {
    const aText = a.children[columnIndex].textContent.trim();
    const bText = b.children[columnIndex].textContent.trim();

    if (columnIndex === 3) {
      return parseSalary(aText) - parseSalary(bText);
    }

    if (columnIndex === 2) {
      return Number(aText) - Number(bText);
    }

    return aText.localeCompare(bText);
  });

  tbody.innerHTML = '';
  sortedRows.forEach((row) => tbody.appendChild(row));
}

headers.forEach((th, index) => {
  th.addEventListener('click', () => {
    sortTable(index);
  });
});
