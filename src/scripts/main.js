'use strict';

const table = document.querySelector('table');
const tableHead = table.tHead;
const tableBody = table.tBodies[0];

tableHead.addEventListener('click', event => {
  const target = event.target;

  if (target.tagName !== 'TH') {
    return;
  }

  const indexOfCellToSort = target.cellIndex;
  const tableRows = [ ...tableBody.rows ];

  sortTable(tableRows, indexOfCellToSort);
});

function sortTable(list, indexOfCellToSort) {
  list.sort((previous, current) => {
    let previousContent = previous.cells[indexOfCellToSort].textContent;
    let currentContent = current.cells[indexOfCellToSort].textContent;

    switch (indexOfCellToSort) {
      case 2:
        previousContent = parseInt(previousContent);
        currentContent = parseInt(currentContent);

        return previousContent - currentContent;
      case 3:
        previousContent = parseInt(
          previousContent.slice(1).split(',').join('')
        );

        currentContent = parseInt(
          currentContent.slice(1).split(',').join('')
        );

        return previousContent - currentContent;
    }

    return previousContent.localeCompare(currentContent);
  });

  tableBody.append(...list);
}
