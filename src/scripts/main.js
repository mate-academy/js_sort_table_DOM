'use strict';

const tableHead = document.querySelector('thead');

tableHead.addEventListener('click', (e) => {
  const header = e.target.closest('th');

  if (!header) {
    return;
  }

  sortTable(header);
});

function sortTable(header) {
  const headersElements = document.querySelectorAll('thead th');
  const headersText = [];

  headersElements.forEach((element) => {
    headersText.push(element.textContent);
  });

  const columnIndex = headersText.indexOf(header.textContent);

  const tbodyElements = document.querySelector('tbody');
  const newTbody = document.createElement('tbody');
  const tableRows = [...tbodyElements.rows];

  tableRows.sort((row1, row2) => sortRows(row1, row2, columnIndex));

  tableRows.forEach((element) => {
    newTbody.append(element);
  });

  tbodyElements.replaceWith(newTbody);
}

function sortRows(row1, row2, columnIndex) {
  const value1 = row1.cells[columnIndex].textContent.trim();
  const value2 = row2.cells[columnIndex].textContent.trim();

  if (columnIndex === 2) {
    return Number(value1) - Number(value2);
  }

  if (columnIndex === 3) {
    return (
      Number(value1.replaceAll('$', '').replaceAll(',', '')) -
      Number(value2.replaceAll('$', '').replaceAll(',', ''))
    );
  }

  return value1.localeCompare(value2);
}
