'use strict';

const table = document.querySelector('table');
const tbody = table.querySelector('tbody');
const headers = table.querySelectorAll('th'); // Виправлено на querySelectorAll

headers.forEach((th, index) => {
  th.addEventListener('click', () => {
    const rows = Array.from(tbody.querySelectorAll('tr'));
    const isNumberColumn = index === 2 || index === 3;

    rows.sort((a, b) => {
      const aText = a.cells[index].textContent.trim();
      const bText = b.cells[index].textContent.trim();

      if (isNumberColumn) {
        const aValue = parseFloat(aText.replace(/[$,]/g, ''));
        const bValue = parseFloat(bText.replace(/[$,]/g, ''));

        return aValue - bValue;
      } else {
        return aText.localeCompare(bText, undefined, { sensitivity: 'base' });
      }
    });

    rows.forEach((row) => tbody.appendChild(row));
  });
});
