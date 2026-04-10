'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const table = document.querySelector('table');
  const headers = table.querySelectorAll('th');
  const tbody = table.querySelector('tbody');

  headers.forEach((header, index) => {
    header.addEventListener('click', () => {
      const rows = Array.from(tbody.querySelectorAll('tr'));

      rows.sort((a, b) => {
        let aText = a.children[index].textContent.trim();
        let bText = b.children[index].textContent.trim();

        if (header.textContent === 'Salary') {
          aText = Number(aText.replace(/[^0-9.-]+/g, ''));
          bText = Number(bText.replace(/[^0-9.-]+/g, ''));

          return aText - bText;
        }

        if (header.textContent === 'Age') {
          return Number(aText) - Number(bText);
        }

        return aText.localeCompare(bText);
      });

      tbody.innerHTML = '';
      rows.forEach((row) => tbody.appendChild(row));
    });
  });
});
