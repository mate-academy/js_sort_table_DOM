'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const table = document.querySelector('table');

  if (!table || !table.tBodies || !table.tBodies.length) {
    return;
  }

  const tbody = table.tBodies[0];
  const headers = table.querySelectorAll('th');

  headers.forEach((header, columnIndex) => {
    header.addEventListener('click', () => {
      const rows = Array.from(tbody.rows);

      const dataRows = rows.filter((row) => row.querySelectorAll('td').length);
      const footerRow = rows.find((row) => row.querySelectorAll('th').length);

      const headerType = header.textContent.trim().toLowerCase();

      dataRows.sort((a, b) => {
        const aText = a.cells[columnIndex].textContent.trim();
        const bText = b.cells[columnIndex].textContent.trim();

        if (headerType === 'salary') {
          return (
            Number(aText.replace(/[$,]/g, '')) -
            Number(bText.replace(/[$,]/g, ''))
          );
        }

        if (headerType === 'age') {
          return Number(aText) - Number(bText);
        }

        return aText.localeCompare(bText);
      });

      dataRows.forEach((row) => {
        tbody.insertBefore(row, footerRow || null);
      });
    });
  });
});
