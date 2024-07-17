'use strict';

const headerOfTable = document.querySelector('thead tr');
const headers = headerOfTable.querySelectorAll('th');

const sortTable = (index) => {
  const rows = document.querySelectorAll('tbody tr');
  const column = [];

  rows.forEach((row) => {
    column.push(row.cells[index].cloneNode(true));
  });

  column.sort((a, b) => {
    const textA = a.innerText.trim();
    const textB = b.innerText.trim();

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

  column.forEach((cell, i) => {
    rows[i].replaceChild(cell, rows[i].cells[index]);
  });
};

headers.forEach((nav, index) => {
  nav.addEventListener('click', () => sortTable(index));
});
