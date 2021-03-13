'use strict';

const headings = document.querySelector('thead');
const rows = [...document.querySelectorAll('tbody tr')];
const body = document.querySelector('tbody');

function convertToNumber(value) {
  return +value.replace('$', '').replace(',', '');
}

headings.addEventListener('click', (clickEvent) => {
  const heading = clickEvent.target.closest('th');
  const columnIndex = heading.cellIndex;

  rows.sort((rowA, rowB) => {
    const firstCellContent = rowA.children[columnIndex].textContent;
    const secondCellContent = rowB.children[columnIndex].textContent;

    if (firstCellContent.includes('$') || Number(firstCellContent)) {
      const a = convertToNumber(firstCellContent);
      const b = convertToNumber(secondCellContent);

      return a - b;
    } else {
      return firstCellContent.localeCompare(secondCellContent);
    }
  });

  body.append(...rows);
});
