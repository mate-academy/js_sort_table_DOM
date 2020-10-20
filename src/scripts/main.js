'use strict';

const thead = document.querySelector('thead');
const tbody = document.querySelector('tbody');
const rows = [...tbody.children];

thead.addEventListener('click', ({ target }) => {
  const columnIndex = target.cellIndex;

  rows.sort((prevRow, nextRow) => {
    const prevContent = prevRow.children[columnIndex].textContent;
    const nextContent = nextRow.children[columnIndex].textContent;

    if (prevContent.startsWith('$')) {
      return parseNumber(prevContent) - parseNumber(nextContent);
    }

    if (isNaN(+prevContent)) {
      return prevContent.localeCompare(nextContent);
    }

    return +prevContent - +nextContent;
  });

  tbody.append(...rows);
});

function parseNumber(str) {
  return parseFloat([ ...str ].slice(1).join('').replace(',', '.'));
};
