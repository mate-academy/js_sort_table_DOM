'use strict';

const table = document.querySelector('table');

table.addEventListener('click', function(e) {
  const columnHeader = e.target;

  if (!table.tHead.contains(columnHeader)) {
    return;
  }

  const columnIndex = columnHeader.cellIndex;
  const sortedRows = [...table.tBodies[0].rows]
    .sort((rowA, rowB) => {
      let rowAData = rowA.cells[columnIndex].innerText;
      let rowBData = rowB.cells[columnIndex].innerText;

      if (rowAData.startsWith('$')) {
        rowAData = rowAData.slice(1).replaceAll(',', '');
        rowBData = rowBData.slice(1).replaceAll(',', '');
      } else if (isNaN(+rowAData)) {
        return rowAData.localeCompare(rowBData);
      }

      return +rowAData - +rowBData;
    });

  table.tBodies[0].append(...sortedRows);
});
