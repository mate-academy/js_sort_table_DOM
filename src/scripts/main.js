'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const table = document.querySelector('table');
  const headers = table.querySelectorAll('th');
  const tbody = table.tBodies[0];

  headers.forEach((header, columnIndex) => {
    header.addEventListener('click', () => {
      const rows = Array.from(tbody.rows);

      const dataRows = rows.filter((row) => row.querySelectorAll('td').length);
      const footerRow = rows.find((row) => row.querySelectorAll('th').length);

      dataRows.sort((a, b) => {
        const aText = a.cells[columnIndex].innerText.trim();
        const bText = b.cells[columnIndex].innerText.trim();

        if (header.innerText === 'Salary') {
          return (
            Number(aText.replace(/[$,]/g, '')) -
            Number(bText.replace(/[$,]/g, ''))
          );
        }

        if (header.innerText === 'Age') {
          return Number(aText) - Number(bText);
        }

        return aText.localeCompare(bText);
      });

      // 🔥 KLUCZ: tylko przestawiamy wiersze
      dataRows.forEach((row) => tbody.insertBefore(row, footerRow));
    });
  });
});
