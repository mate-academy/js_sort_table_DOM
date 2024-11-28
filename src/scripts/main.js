'use strict';

const headerOfTable = document.querySelector('thead tr');
const headers = headerOfTable.querySelectorAll('th');

const sortTable = (index) => {
  const tableBody = document.querySelector('tbody');
  const rows = Array.from(tableBody.querySelectorAll('tr'));

  rows.sort((a, b) => {
    const textA = a.cells[index].innerText.trim();
    const textB = b.cells[index].innerText.trim();

    const extractNumericValue = (text) => {
      return parseFloat(text.replace(/[$,]/g, ''));
    };

    const valueA = extractNumericValue(textA);
    const valueB = extractNumericValue(textB);

    if (!isNaN(valueA) && !isNaN(valueB)) {
      return valueA - valueB;
    } else {
      return textA.localeCompare(textB);
    }
  });

  tableBody.innerHTML = '';
  rows.forEach((row) => tableBody.appendChild(row));
};

headers.forEach((nav, index) => {
  nav.addEventListener('click', () => sortTable(index));
});
