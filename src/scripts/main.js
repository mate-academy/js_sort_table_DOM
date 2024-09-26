'use strict';

const table = document.querySelector('table');
const tableHeader = table.tHead.rows[0].cells;
const tableBody = table.tBodies[0];

[...tableHeader].forEach((th, index) => th.addEventListener('click', () => {
  sortTable(index);
}));

function sortTable(index) {
  const sortedTable = [...tableBody.rows].sort((a, b) => {
    const textA = a.children[index].innerText;
    const textB = b.children[index].innerText;

    if (index > 1) {
      return convertToNumber(textA) - convertToNumber(textB);
    }

    return textA.localeCompare(textB);
  });

  tableBody.innerHTML = '';
  tableBody.append(...sortedTable);
}

function convertToNumber(currencyString) {
  return parseFloat(currencyString.replace(/[$,]/g, ''));
}
