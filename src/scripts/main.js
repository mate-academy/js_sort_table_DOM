'use strict';

const headTable = document.querySelector('thead');
const bodyTable = document.querySelector('tbody');
const titles = headTable.firstElementChild.children;
const rows = [...bodyTable.children];

headTable.addEventListener('click', ({ target }) => {
  const columnIndex = [...titles]
    .findIndex(title => title === target);

  const contentType = titles[columnIndex].textContent;

  rows.sort((prevRow, nextRow) => {
    const prevContent = prevRow.children[columnIndex].textContent;
    const nextContent = nextRow.children[columnIndex].textContent;

    if (contentType === 'Name' || contentType === 'Position') {
      return prevContent.localeCompare(nextContent);
    }

    if (contentType === 'Age') {
      return +prevContent - +nextContent;
    }

    return parseNumber(prevContent) - parseNumber(nextContent);
  });

  bodyTable.append(...rows);
});

function parseNumber(str) {
  return parseFloat([ ...str ].slice(1).join('').replace(',', '.'));
};
