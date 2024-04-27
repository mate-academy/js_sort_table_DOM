'use strict';

const table = document.querySelector('table');
const tableContent = document.querySelector('tbody');
let lastSortedIndex = null;
let isAscending = true;

table.addEventListener('click', function(e) {
  const header = e.target.closest('th');

  if (!header) {
    return;
  }

  const cellIndex = header.cellIndex;

  if (cellIndex === lastSortedIndex) {
    isAscending = !isAscending;
  } else {
    isAscending = true;
    lastSortedIndex = cellIndex;
  }

  const sortedRows = sortRows(tableContent.children, cellIndex);

  tableContent.append(...sortedRows);
});

function sortRows([...rows], index) {
  const isSortingBySalary = index === 3;

  rows.sort((a, b) => {
    const dataA = a.cells[index].innerText;
    const dataB = b.cells[index].innerText;

    if (isSortingBySalary) {
      const normalize = (data) => data.slice(1).replace(',', '');

      if (isAscending) {
        return normalize(dataA) - normalize(dataB);
      } else {
        return normalize(dataB) - normalize(dataA);
      }
    }

    if (isAscending) {
      return dataA.localeCompare(dataB);
    } else {
      return dataB.localeCompare(dataA);
    }
  });

  return rows;
}
