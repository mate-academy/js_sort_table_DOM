'use strict';

// write code here
const tbody = document.querySelector('tbody');
const headers = document.querySelectorAll('th');

headers.forEach((header, index) => {
  header.addEventListener('click', () => {
    const rows = Array.from(tbody.querySelectorAll('tr'));

    const sortedRows = rows.sort((a, b) => {
      const aText = a.children[index].textContent.trim();
      const bText = b.children[index].textContent.trim();

      const isSalaryColumn = aText.startsWith('$');
      const isNumber = !isNaN(parseFloat(aText)) || isSalaryColumn;

      if (isSalaryColumn) {
        const aVal = parseFloat(aText.replace(/[$,]/g, ''));
        const bVal = parseFloat(bText.replace(/[$,]/g, ''));

        return aVal - bVal;
      } else if (isNumber) {
        return parseFloat(aText) - parseFloat(bText);
      } else {
        return aText.localeCompare(bText);
      }
    });

    tbody.innerHTML = '';
    sortedRows.forEach((row) => tbody.appendChild(row));
  });
});
