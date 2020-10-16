'use strict';

const headTable = document.querySelector('thead');
const bodyTable = document.querySelector('tbody');
const titles = headTable.firstElementChild.children;
const rows = [...bodyTable.children];

headTable.addEventListener('click', ({ target }) => {
  const columnIndex = [...titles].indexOf(target);

  rows.sort((prevRow, nextRow) => {
    const prevContent = prevRow.children[columnIndex].textContent;
    const nextContent = nextRow.children[columnIndex].textContent;

    if (prevContent.startsWith('$')) {
      return parseNumber(nextContent) - parseNumber(prevContent);
    }

    if (isNaN(+prevContent)) {
      return nextContent.localeCompare(prevContent);
    }

    return +nextContent - +prevContent;
  });

  bodyTable.append(...rows);
});

function parseNumber(str) {
  return parseFloat([ ...str ].slice(1).join('').replace(',', '.'));
};
