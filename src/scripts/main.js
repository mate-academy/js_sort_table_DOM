'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const headerItems = document.querySelectorAll('thead th');
  const tableRows = document.querySelectorAll('tbody tr');
  const table = document.querySelector('tbody');

  function sortTable(item) {
    const itemIndex = [...headerItems].indexOf(item.target);

    const sortedTableRows = [...tableRows].sort((rowA, rowB) => {
      const cellA = rowA.children[itemIndex].textContent.trim();
      const cellB = rowB.children[itemIndex].textContent.trim();

      if (cellA.startsWith('$') || !isNaN(+cellA)) {
        return parseFloat(cellA.replace(/[$,]/g, ''))
        - parseFloat(cellB.replace(/[$,]/g, ''));
      }

      return cellA.localeCompare(cellB);
    });

    table.innerHTML = '';

    sortedTableRows.forEach((sortedRow) => {
      table.appendChild(sortedRow);
    });
  }

  headerItems.forEach((headerItem) => {
    headerItem.addEventListener('click', sortTable);
  });
});
