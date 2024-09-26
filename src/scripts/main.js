'use strict';

const titlesRow = document.querySelector('thead');
const table = document.querySelector('tbody');
const listItems = [...table.children];

function normalizeSalary(str) {
  return str.replace(/[$,]/g, '');
}

function sortTable(tableToSort, i) {
  return tableToSort.sort((a, b) => {
    const aValue = a.cells[i].innerText;
    const bValue = b.cells[i].innerText;

    switch (i) {
      case 0:
      case 1:
        return aValue.localeCompare(bValue);
      case 2:
        return aValue - bValue;
      case 3:
        return normalizeSalary(aValue) - normalizeSalary(bValue);
      default: break;
    }
  });
}

titlesRow.addEventListener('click', e => {
  const index = e.target.cellIndex;
  const sortedTable = sortTable(listItems, index);

  sortedTable.forEach(item => table.append(item));
});
