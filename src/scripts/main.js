'use strict';

const tableHead = document.querySelector('thead');
const tableBody = document.querySelector('tbody');
const rowsList = [...tableBody.querySelectorAll('tr')];
const cellsList = [...tableHead.querySelectorAll('th')];

function formatContent(text) {
  return +text.replace(/[$,]/g, '');
}

tableHead.addEventListener('click', (eventClick) => {
  const cellIndex = cellsList
    .findIndex(cell => (
      cell.innerText === eventClick.target.innerText
    ));

  rowsList.sort((firstRow, secondRow) => {
    const firstCell = firstRow.children[cellIndex].innerText;
    const secondCell = secondRow.children[cellIndex].innerText;

    if (isNaN(formatContent(firstCell))) {
      return firstCell.localeCompare(secondCell);
    } else {
      return (formatContent(firstCell) - formatContent(secondCell));
    }
  });

  tableBody.append(...rowsList);
});
