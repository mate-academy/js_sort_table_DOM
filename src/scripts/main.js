'use strict';

const tableBody = document.querySelector('tbody');
const rowsArray = Array.from(document.querySelectorAll('tbody tr'));
const headings = document.querySelector('thead');

function convertToNumber(string) {
  return parseInt(string.slice(1).replaceAll(',', ''));
}

headings.addEventListener('click', e => {
  const index = e.target.cellIndex;

  rowsArray.sort((a, b) => {
    const aText = a.cells[index].textContent;
    const bText = b.cells[index].textContent;
    const callWithA = convertToNumber(aText);
    const callWithB = convertToNumber(bText);

    if (+aText) {
      return +aText - (+bText);
    } else if (+callWithA) {
      return callWithA
      - callWithB;
    } else if (typeof aText === 'string'
    && !callWithA) {
      return aText.localeCompare(bText);
    }
  });

  tableBody.append(...rowsArray);
});
