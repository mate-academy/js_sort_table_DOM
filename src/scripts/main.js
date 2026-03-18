'use strict';

const headers = document.querySelectorAll('th');
const tbody = document.querySelector('tbody');

headers.forEach((header, index) => {
  header.addEventListener('click', () => {
    const rows = Array.from(tbody.querySelectorAll('tr'));

    const sorted = rows.sort((a, b) => {
      const aText = a.cells[index].textContent;
      const bText = b.cells[index].textContent;

      if (!isNaN(aText) && !isNaN(bText)) {
        return Number(aText) - Number(bText);
      }

      return aText.localeCompare(bText);
    });

    tbody.append(...sorted);
  });
});
