'use strict';

// write code here
const navBar = document.querySelector('thead tr');
const tableBody = document.querySelector('tbody');

function sortTable(value, columnIndex) {
  const rowsArray = Array.from(tableBody.querySelectorAll('tr'));

  rowsArray.sort((a, b) => {
    const cellA = a.cells[columnIndex].innerText.toLowerCase();
    const cellB = b.cells[columnIndex].innerText.toLowerCase();

    switch (value) {
      case 'name':
      case 'position':
        return cellA.localeCompare(cellB);

      case 'age':
        return cellA - cellB;

      case 'salary':
        return (
          +cellA.replace(',', '').slice(1) - +cellB.replace(',', '').slice(1)
        );

      default:
        return null;
    }
  });

  rowsArray.forEach((row) => tableBody.appendChild(row));
}

navBar.addEventListener('click', (action) => {
  const activeFilter = action.target.closest('th');

  if (activeFilter) {
    const value = activeFilter.textContent.toLowerCase().trim();
    const columnIndex = action.target.cellIndex;

    sortTable(value, columnIndex);
  }
});
