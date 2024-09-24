'use strict';

document.querySelectorAll('#employeeTable th').forEach((header, index) => {
  header.addEventListener('click', () => {
    sortTable(index);
  });
});

function sortTable(columnIndex) {
  const table = document.getElementById('employeeTable').querySelector('tbody');
  const rowsArray = Array.from(table.rows);

  rowsArray.sort((rowA, rowB) => {
    const cellA = rowA.cells[columnIndex].innerText;
    const cellB = rowB.cells[columnIndex].innerText;

    if (columnIndex === 3) {
      return (
        parseFloat(cellA.replace(/[$,]/g, '')) -
        parseFloat(cellB.replace(/[$,]/g, ''))
      );
    }

    if (columnIndex === 2) {
      return parseInt(cellA) - parseInt(cellB);
    }

    return cellA.localeCompare(cellB);
  });

  rowsArray.forEach((row) => table.appendChild(row));
}
