'use strict';

const sortQuery = document.querySelectorAll('th');
const sortValue = document.querySelector('tbody');
const rows = [...sortValue.children];

sortQuery.forEach((item) => {
  item.addEventListener('click', sortHandler);
});

function sortHandler(e) {
  const idx = e.target.cellIndex;

  rows
    .sort((a, b) => {
      if (idx === 3) {
        return (
          convertToNumber(a.children[idx].textContent) -
          convertToNumber(b.children[idx].textContent)
        );
      }

      return a.children[idx].textContent.localeCompare(
        b.children[idx].textContent,
      );
    })
    .forEach((item) => {
      sortValue.appendChild(item);
    });
}

function convertToNumber(str) {
  const clearStr = str.replaceAll(',', '').slice(1);

  return Number(clearStr);
}
