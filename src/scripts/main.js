'use strict';

// write code here

const thElements = document.querySelectorAll('th');

let sortColumnIndex = null;
let sortDirection = 'asc';

thElements.forEach((th, index) => {
  th.addEventListener('click', () => {
    if (sortColumnIndex === index) {
      sortDirection = sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      sortColumnIndex = index;
      sortDirection = 'asc';
    }

    const rows = Array.from(document.querySelectorAll('tbody tr'));

    rows.sort((a, b) => {
      const cellA = a.children[sortColumnIndex].textContent.trim();
      const cellB = b.children[sortColumnIndex].textContent.trim();

      const cleanCellA = cellA.replace(/[^0-9.-]+/g, '');
      const cleanCellB = cellB.replace(/[^0-9.-]+/g, '');

      const numA = Number(cleanCellA);
      const numB = Number(cleanCellB);

      const isNumA = cleanCellA !== '' && !isNaN(numA);
      const isNumB = cleanCellB !== '' && !isNaN(numB);

      if (isNumA && isNumB) {
        return (numA - numB) * (sortDirection === 'asc' ? 1 : -1);
      } else {
        return cellA.localeCompare(cellB) * (sortDirection === 'asc' ? 1 : -1);
      }
    });

    const tbody = document.querySelector('tbody');

    tbody.innerHTML = '';
    rows.forEach((row) => tbody.appendChild(row));
  });
});
