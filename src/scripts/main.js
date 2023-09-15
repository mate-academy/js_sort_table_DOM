'use strict';

const table = document.querySelector('table');

const tableBody = table.children[1];
const tableBodyRows = tableBody.children;
const tableHeadRow = table.firstElementChild.firstElementChild;

const getNumber = (row) => {
  return +row.lastElementChild.textContent.slice(1).replace(',', '');
};

tableHeadRow.addEventListener('click', (e) => {
  const title = e.target.textContent;

  const rows = [...tableBodyRows];

  const cases = {
    name: 'Name',
    position: 'Position',
  };

  switch (title) {
    case cases.name:
    case cases.position:
      rows.sort((row1, row2) => {
        const columnNumber = title === cases.name ? 0 : 1;

        return row1.children[columnNumber].textContent.localeCompare(
          row2.children[columnNumber].textContent
        );
      });
      break;

    case 'Age':
      rows.sort((row1, row2) => (
        +row1.children[2].textContent - +row2.children[2].textContent
      ));
      break;

    case 'Salary':
      rows.sort((row1, row2) => getNumber(row1) - getNumber(row2));
      break;

    default:
      break;
  }
  rows.forEach(row => tableBody.append(row));
});
