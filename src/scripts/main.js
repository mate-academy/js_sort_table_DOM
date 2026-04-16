'use strict';

const headers = document.querySelectorAll('thead th');

headers.forEach((th, index) => {
  th.addEventListener('click', () => {
    sortByColumn(index);
  });
});

function sortByColumn(colIndex) {
  const table = document.querySelector('table');
  const tbody = table.querySelector('tbody');

  const rowsArray = Array.from(tbody.rows);

  rowsArray.sort((a, b) => {
    const contentA = a.cells[colIndex].textContent;
    const contentB = b.cells[colIndex].textContent;
    const numA = parseFloat(contentA.replace(/[$,]/g, ''));
    const numB = parseFloat(contentB.replace(/[$,]/g, ''));

    if (!isNaN(numA) && !isNaN(numB)) {
      return numA - numB;
    }

    return contentA.localeCompare(contentB);
  });

  tbody.append(...rowsArray);
}
