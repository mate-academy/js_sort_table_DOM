'use strict';

const table = document.querySelector('table');
const tableBody = document.querySelector('tbody');

function sortArrayByType(element, index) {
  element.sort((a, b) => {
    let prevItem = a[index].innerText;
    let nextItem = b[index].innerText;

    if (prevItem.includes('$') || !isNaN(prevItem)) {
      prevItem = +prevItem.replace(/[$,]/g, '');
      nextItem = +nextItem.replace(/[$,]/g, '');

      return prevItem - nextItem;
    }

    return prevItem.localeCompare(nextItem);
  });
}

function sortTable(index) {
  let columnElements = [];

  for (const row of tableBody.rows) {
    columnElements.push(row.children);
  }

  sortArrayByType(columnElements, index);

  columnElements = columnElements.map(elem => elem[0].parentElement);

  tableBody.append(...columnElements);
}

table.addEventListener('click', (clicked) => {
  if (clicked.target.tagName !== 'TH') {
    return;
  }

  const sortColumnIndex = clicked.target.cellIndex;

  sortTable(sortColumnIndex);
});
