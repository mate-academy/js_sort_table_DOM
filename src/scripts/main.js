'use strict';

const table = document.querySelector('table');

function sortTable(columnNumber) {
  const body = document.querySelector('tbody');
  const rows = Array.from(body.rows);

  function clearData(data) {
    return data.replace(/\W|_/g, '');
  }

  let sortedData;

  if (Number(clearData(rows[0].cells[columnNumber].textContent))) {
    sortedData = rows.sort(
      (row1, row2) =>
        clearData(row1.cells[columnNumber].textContent) -
        clearData(row2.cells[columnNumber].textContent),
    );
  } else {
    sortedData = rows.sort((row1, row2) => {
      const cellA = row1.cells[columnNumber].textContent;
      const cellB = row2.cells[columnNumber].textContent;

      sortedData = cellA.localeCompare(cellB);

      return sortedData;
    });
  }

  body.append(...sortedData);
}

table.addEventListener('click', (ev) => {
  if (ev.target.tagName === 'TH') {
    const header = ev.target;

    sortTable(header.cellIndex);
  }
});
