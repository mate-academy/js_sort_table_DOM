'use strict';

const table = document.querySelector('table');

table.addEventListener('click', (e) => {
  if (e.target.tagName !== 'TH') {
    return;
  }

  const headers = [...table.querySelectorAll('th')];
  const columnIndex = headers.indexOf(e.target);
  const tbody = table.querySelector('tbody');
  const rows = [...tbody.querySelectorAll('tr')];

  rows.sort((a, b) => {
    const cellA = a.children[columnIndex].textContent.trim();
    const cellB = b.children[columnIndex].textContent.trim();

    const numA = parseFloat(cellA.replace(/[^0-9.-]+/g, ''));
    const numB = parseFloat(cellB.replace(/[^0-9.-]+/g, ''));

    const isNumber = !isNaN(numA) && !isNaN(numB);

    if (isNumber) {
      return Number(numA) - Number(numB);
    } else {
      return cellA.localeCompare(cellB);
    }
  });

  rows.forEach((row) => tbody.appendChild(row));
});
