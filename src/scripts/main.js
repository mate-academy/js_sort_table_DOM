'use strict';

// write code here
const table = document.querySelector('table');
const headers = table.querySelectorAll('th');
const tbody = table.querySelector('tbody');

function sortTable(index) {
  const rowsArray = Array.from(tbody.rows);
  const sortedRows = rowsArray.sort((rowA, rowB) => {
    const cellA = rowA.cells[index].textContent;
    const cellB = rowB.cells[index].textContent;
    const isNumericA = !isNaN(cellA) && !isNaN(parseFloat(cellA));
    const isNumericB = !isNaN(cellB) && !isNaN(parseFloat(cellB));
    const isDateA = !isNaN(Date.parse(cellA));
    const isDateB = !isNaN(Date.parse(cellB));

    if (isNumericA && isNumericB) {
      return parseFloat(cellA) - parseFloat(cellB);
    }

    if (isDateA && isDateB) {
      return new Date(cellA) - new Date(cellB);
    }

    return cellA.localeCompare(cellB);
  });

  tbody.innerHTML = '';
  tbody.append(...sortedRows);
}

headers.forEach((header, index) => {
  header.addEventListener('click', () => {
    sortTable(index);
  });
});
