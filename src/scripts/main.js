'use strict';

const tableHeader = document.querySelector('thead');
const tableBody = document.querySelector('tbody');
const bodyRows = tableBody.querySelectorAll('tr');

tableHeader.addEventListener('click', (e) => {
  if (e.target.tagName !== 'TH') {
    return;
  }

  const clickedIndex = e.target.cellIndex;
  const isNumericSort = clickedIndex === 2 || clickedIndex === 3;

  const sortedRows = [...bodyRows].sort((rowA, rowB) => {
    const cellA = rowA.children[clickedIndex].textContent.trim();
    const cellB = rowB.children[clickedIndex].textContent.trim();

    if (isNumericSort) {
      return +cellA.replace(/\D+/g, '') - +cellB.replace(/\D+/g, '');
    } else {
      return cellA.localeCompare(cellB);
    }
  });

  sortedRows.forEach((row) => tableBody.append(row));
});
