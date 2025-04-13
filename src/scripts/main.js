'use strict';

const tableHeaders = document.querySelectorAll('th');
const tableBodyRows = document.querySelectorAll('tbody tr');

tableHeaders.forEach((header, index) => {
  header.addEventListener('click', () => {
    const sortedRows = [...tableBodyRows].sort((rowA, rowB) => {
      const cellA = rowA.children[index].textContent.trim();
      const cellB = rowB.children[index].textContent.trim();

      const numA = parseFloat(cellA.replace(/[^0-9.-]/g, ''));
      const numB = parseFloat(cellB.replace(/[^0-9.-]/g, ''));

      return isNaN(numA) || isNaN(numB)
        ? cellA.localeCompare(cellB)
        : numA - numB;
    });

    document.querySelector('tbody').append(...sortedRows);
  });
});
