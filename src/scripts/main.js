'use strict';

const tableHaders = document.querySelectorAll('th');

const tbody = document.querySelector('tbody');

tableHaders.forEach((header, columIndex) => {
  header.addEventListener('click', (e) => {
    const rows = [...tbody.querySelectorAll('tr')];

    rows.sort((rowA, rowB) => {
      const columA = rowA.children[columIndex].textContent.trim();
      const columB = rowB.children[columIndex].textContent.trim();

      const value1 = parseFloat(columA.replace(/[$,]/g, ''));
      const value2 = parseFloat(columB.replace(/[$,]/g, ''));

      if (!isNaN(value1) && !isNaN(value2)) {
        return value1 - value2;
      } else {
        return columA.localeCompare(columB);
      }
    });

    rows.forEach((row) => tbody.appendChild(row));
  });
});
