'use strict';

const tableHead = document.querySelector('thead');
const tableBody = document.querySelector('tbody');

tableHead.addEventListener('click', (e) => {
  const clickedHeader = e.target;
  const clickedHeaderText = clickedHeader.textContent;

  const columnIndex = clickedHeader.cellIndex;
  const bodyRows = [...tableBody.rows];

  bodyRows.sort((firstRow, secondRow) => {
    const firstData = firstRow.cells[columnIndex].textContent;
    const secondData = secondRow.cells[columnIndex].textContent;

    if (clickedHeaderText === 'Name' || clickedHeaderText === 'Position') {
      return firstData.localeCompare(secondData);
    }

    if (clickedHeaderText === 'Age') {
      return Number(firstData) - Number(secondData);
    }

    return Number(firstData.replace(/[^\d]/g, '')) -
      Number(secondData.replace(/[^\d]/g, ''));
  });

  tableBody.append(...bodyRows);
});
