'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const table = document.querySelector('table');
  const tbody = table.querySelector('tbody');
  const headers = table.querySelectorAll('th');

  headers.forEach((th, index) => {
    th.style.cursor = 'pointer';

    th.addEventListener('click', () => {
      const rows = Array.from(tbody.rows);

      rows.sort((a, b) => {
        let aText = a.cells[index].innerText.trim();
        let bText = b.cells[index].innerText.trim();

        // jeśli liczby, usuń $ i przecinki
        aText = aText.replace(/\$/g, '').replace(/,/g, '');
        bText = bText.replace(/\$/g, '').replace(/,/g, '');

        if (!isNaN(aText) && !isNaN(bText)) {
          return Number(aText) - Number(bText);
        } else {
          return aText.localeCompare(bText);
        }
      });

      // dodaj wiersze w nowej kolejności
      rows.forEach(row => tbody.appendChild(row));
    });
  });
});
