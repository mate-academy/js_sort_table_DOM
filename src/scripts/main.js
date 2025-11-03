'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const table = document.querySelector('table');
  const headers = table.querySelectorAll('th');
  const tbody = table.querySelector('tbody');

  headers.forEach((header, index) => {
    header.addEventListener('click', () => {
      const rows = Array.from(tbody.querySelectorAll('tr'));

      const sortedRows = rows.sort((a, b) => {
        const aText = a.children[index].textContent.trim();
        const bText = b.children[index].textContent.trim();

        const aNum = parseFloat(aText.replace(/[^0-9.]/g, ''));
        const bNum = parseFloat(bText.replace(/[^0-9.]/g, ''));

        if (!isNaN(aNum) && !isNaN(bNum)) {
          return aNum - bNum;
        }

        return aText.localeCompare(bText);
      });

      tbody.innerHTML = '';
      sortedRows.forEach((row) => tbody.appendChild(row));
    });
  });
});
