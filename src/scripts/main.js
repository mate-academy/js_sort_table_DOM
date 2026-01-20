'use strict';

const table = document.querySelector('table');
const headers = table.querySelectorAll('th');

headers.forEach((header, index) => {
  header.addEventListener('click', () => {
    sortTableColumn(table, index);
  });
});

function sortTableColumn(myTable, columnIndex) {
  const tbody = myTable.tBodies[0];
  const rows = Array.from(tbody.rows);

  rows.sort((a, b) => {
    const cellA = a.cells[columnIndex].textContent.trim();
    const cellB = b.cells[columnIndex].textContent.trim();

    const aNum = parseFloat(cellA.replace(/[^0-9.-]+/g, ''));
    const bNum = parseFloat(cellB.replace(/[^0-9.-]+/g, ''));

    if (!isNaN(aNum) && !isNaN(bNum)) {
      return aNum - bNum;
    } else {
      return cellA.localeCompare(cellB);
    }
  });

  rows.forEach((row) => tbody.appendChild(row));
}
