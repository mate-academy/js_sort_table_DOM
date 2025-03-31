'use strict';

const table = document.querySelector('table');
const tableHeadings = table.querySelectorAll('thead th');
const tableBody = table.querySelector('tbody');
const dataRows = tableBody.querySelectorAll('tr');

tableHeadings.forEach((cell, index) => {
  cell.addEventListener('click', (ev) => handleHeadingClick(ev, index));
});

function handleHeadingClick(ev, index) {
  const rowsCopy = [...dataRows];

  // rowsCopy.forEach((row) => {
  //   console.log(row.cells[index]);
  // });

  rowsCopy.sort((a, b) => {
    const aTextValue = getSanitizedTextContent(a.cells[index]);
    const bTextValue = getSanitizedTextContent(b.cells[index]);

    if (!isNaN(+aTextValue + +bTextValue)) {
      return +aTextValue - +bTextValue;
    }

    return aTextValue.localeCompare(bTextValue);
  });

  for (const row of rowsCopy) {
    tableBody.appendChild(row);
  }
}

function getSanitizedTextContent(cell) {
  return cell.textContent.replaceAll('$', '').replaceAll(',', '');
}
