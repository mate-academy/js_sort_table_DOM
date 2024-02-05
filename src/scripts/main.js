'use strict';

const table = document.querySelector('table');
const tableContent = document.querySelector('tbody');

table.addEventListener('click', function(e) {
  const header = e.target.closest('th');

  if (!header) {
    return;
  }

  const cellIndex = header.cellIndex;

  const sortedRows = sortRows(tableContent.children, cellIndex);

  tableContent.append(...sortedRows);
});

function sortRows([...rows], index) {
  const bySalary = index === 3;

  rows.sort((a, b) => {
    const dataA = a.cells[index].innerText;
    const dataB = b.cells[index].innerText;

    if (bySalary) {
      const normalize = (data) => data.slice(1).replace(',', '');

      return normalize(dataA) - normalize(dataB);
    }

    return dataA.localeCompare(dataB);
  });

  return rows;
}
