'use strict';

// write code here
function getSortTable(sortBy, table) {
  const copyOfTable = [...table];

  switch (sortBy) {
    case 'Name':
      copyOfTable.sort((a, b) => {
        return a.cells[0].textContent.localeCompare(b.cells[0].textContent);
      });

      break;

    case 'Position':
      copyOfTable.sort((a, b) => {
        return a.cells[1].textContent.localeCompare(b.cells[1].textContent);
      });

      break;

    case 'Age':
      copyOfTable.sort((a, b) => {
        return a.cells[2].textContent.localeCompare(b.cells[2].textContent);
      });

      break;

    case 'Salary':
      copyOfTable.sort((a, b) => {
        const numberA = a.cells[3].textContent.slice(1).replace(',', '');
        const numberB = b.cells[3].textContent.slice(1).replace(',', '');

        return numberA - numberB;
      });

      break;
  }

  return copyOfTable;
}

const tableHead = [...document.querySelector('thead').querySelectorAll('th')];
const tableBodyRows = [...document.querySelector('tbody').rows];

addEventListener('click', (e) => {
  if (tableHead.includes(e.target)) {
    const sortedRows = getSortTable(e.target.textContent, tableBodyRows);
    const tableBody = document.querySelector('tbody');
    const newTableBody = document.createElement('tbody');

    sortedRows.forEach((row) => newTableBody.append(row));
    tableBody.replaceWith(newTableBody);
  }
});
