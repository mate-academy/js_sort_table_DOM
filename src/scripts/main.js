'use strict';

const table = document.querySelector('table');

table.addEventListener('click', function(e) {
  if (e.target.matches('thead tr th')) {
    const tbodyRows = [...table.tBodies[0].rows];
    const thIndex = e.target.cellIndex;

    tbodyRows.sort((a, b) => sortRows(a, b, thIndex));

    for (const tr of tbodyRows) {
      table.tBodies[0].append(tr);
    }
  }
});

function sortRows(a, b, index) {
  const aText = a.children[index].textContent;
  const bText = b.children[index].textContent;

  if (aText[0] !== '$') {
    return aText.localeCompare(bText);
  }

  return formatToNum(aText) - formatToNum(bText);
}

function formatToNum(num) {
  return Number(num.slice(1).split(',').join(''));
}
