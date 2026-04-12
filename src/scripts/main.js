'use strict';

const table = document.querySelector('table');

table.addEventListener('click', (e) => {
  const target = e.target.closest('th');
  const tbody = table.tBodies[0] || table;

  let rows = [];
  const columnIndex = target.cellIndex;

  rows = Array.from(tbody.rows);

  rows.sort((a, b) => {
    if (/\d/.test(a.cells[columnIndex].textContent)) {
      const aNum = parseFloat(
        a.cells[columnIndex].textContent.replace('$', ''),
      );
      const bNum = parseFloat(
        b.cells[columnIndex].textContent.replace('$', ''),
      );

      return aNum - bNum;
    }

    const aText = a.cells[columnIndex].textContent.trim();
    const bText = b.cells[columnIndex].textContent.trim();

    return aText.localeCompare(bText);
  });

  rows.forEach((row) => tbody.appendChild(row));
});
