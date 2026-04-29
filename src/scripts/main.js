'use strict';

const table = document.querySelector('table');
const headers = table.querySelectorAll('th');
const tbody = table.querySelector('tbody');

headers.forEach((th, index) => {
  th.addEventListener('click', () => {
    const rows = Array.from(tbody.rows);

    rows.sort((a, b) => {
      const aText = a.cells[index].textContent.trim();
      const bText = b.cells[index].textContent.trim();

      const aClean = aText.replace(/[$,]/g, '');
      const bClean = bText.replace(/[$,]/g, '');

      const isANumber = aClean !== '' && !isNaN(aClean);
      const isBNumber = bClean !== '' && !isNaN(bClean);

      if (isANumber && isBNumber) {
        return Number(aClean) - Number(bClean);
      }

      return aText.localeCompare(bText);
    });

    tbody.append(...rows);
  });
});
