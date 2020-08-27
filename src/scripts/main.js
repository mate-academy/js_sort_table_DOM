'use strict';

const tBody = document.querySelector('tbody');

const tableHead = document.querySelector('thead');

const tableHeaders = [...tableHead.children[0].children];

const rows = [...tBody.querySelectorAll('tr')];

function toNumber(value) {
  return Number(value
    .replace(/\$/g, '')
    .split(',')
    .join(''));
}

function sortTable(tblBody, columnIndex) {
  const sortedRows = rows.sort((a, b) => {
    const aColumnText = a.children[columnIndex]
      .textContent
      .trim();
    const bColumnText = b.children[columnIndex]
      .textContent
      .trim();

    if (aColumnText.includes('$')) {
      return toNumber(aColumnText) - toNumber(bColumnText);
    }

    if (!isNaN(parseInt(aColumnText))) {
      return parseInt(aColumnText) - parseInt(bColumnText);
    }

    return aColumnText.localeCompare(bColumnText);
  });

  while (tblBody.firstChild) {
    tblBody.removeChild(tblBody.firstChild);
  }

  tblBody.append(...sortedRows);
}

tableHead.addEventListener('click', ev => {
  const headerIndex = tableHeaders.indexOf(ev.target);

  sortTable(tBody, headerIndex);
});
