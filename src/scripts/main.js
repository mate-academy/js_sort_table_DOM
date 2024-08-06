'use strict';

const table = document.querySelector('table');

const tableData = tableToObject(table);

table.tHead.addEventListener('click', (e) => {
  const cellIndex = e.target.cellIndex;
  const columnName = e.target.innerHTML;

  const isNumber = isFinite(
    integerCleaner(table.rows[1].cells[cellIndex].innerHTML),
  );

  let sortedTableData;

  if (isNumber) {
    sortedTableData = tableData.sort(
      (a, b) => integerCleaner(a[columnName]) - integerCleaner(b[columnName]),
    );
  } else {
    sortedTableData = tableData.sort((a, b) => {
      const nameA = a[columnName].toUpperCase();
      const nameB = b[columnName].toUpperCase();

      if (nameA < nameB) {
        return -1;
      }

      if (nameA > nameB) {
        return 1;
      }

      return 0;
    });
  }

  const tbody = document.querySelector('table tbody');

  tbody.innerHTML = '';

  for (const rowData of sortedTableData) {
    const row = document.createElement('tr');

    for (let i = 0; i < table.rows[0].cells.length; i++) {
      const cell = document.createElement('td');

      cell.innerHTML = rowData[table.tHead.rows[0].cells[i].innerHTML];
      row.append(cell);
    }
    tbody.append(row);
  }
});

function tableToObject(tableNode) {
  const tableDataArray = [];

  for (const tbody of tableNode.tBodies) {
    for (const row of tbody.rows) {
      const rowData = {};

      for (let i = 0; i < tableNode.rows[0].cells.length; i++) {
        rowData[tableNode.tHead.rows[0].cells[i].innerHTML] =
          row.cells[i].innerHTML;
      }

      tableDataArray.push(rowData);
    }
  }

  return tableDataArray;
}

function integerCleaner(salary) {
  return salary.replaceAll('$', '').replaceAll(',', '');
}
