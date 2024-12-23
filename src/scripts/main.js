'use strict';

const table = document.querySelector('table');
const theadFromTable = table.querySelector('thead');

function sortForTable(tableForSort, tableCellIndex) {
  if (tableForSort.tagName === 'TABLE') {
    const tBody = document.querySelector('tbody');
    const rowsFromTbody = [...tBody.children];

    rowsFromTbody.sort((row1, row2) => {
      const value1 = row1.children[tableCellIndex].textContent;
      const value2 = row2.children[tableCellIndex].textContent;

      if (tableCellIndex === 2 || tableCellIndex === 3) {
        const clearValue1 = value1.replaceAll(',', '').replaceAll('$', '');
        const clearValue2 = value2.replaceAll(',', '').replaceAll('$', '');

        return parseInt(clearValue1) - parseInt(clearValue2);
      }

      return value1.localeCompare(value2);
    });

    tBody.append(...rowsFromTbody);
  }
}

theadFromTable.addEventListener('click', function (eventData) {
  if (eventData.target.tagName === 'TH') {
    sortForTable(this.parentElement, eventData.target.cellIndex);
  }
});
