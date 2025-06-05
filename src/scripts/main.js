'use strict';

const tableHaders = document.querySelectorAll('th');

const tbody = document.querySelector('tbody');

tableHaders.forEach((header, columnIndex) => {
  header.addEventListener('click', (e) => {
    const rows = [...tbody.querySelectorAll('tr')];

    rows.sort((rowA, rowB) => {
      const columnA = rowA.children[columnIndex].textContent.trim();
      const columnB = rowB.children[columnIndex].textContent.trim();

      const value1 = parseFloat(columnA.replace(/[$,]/g, ''));
      const value2 = parseFloat(columnB.replace(/[$,]/g, ''));

      if (!isNaN(value1) && !isNaN(value2)) {
        return value1 - value2;
      } else {
        return columnA.localeCompare(columnB);
      }
    });

    rows.forEach((row) => tbody.appendChild(row));
  });
});
