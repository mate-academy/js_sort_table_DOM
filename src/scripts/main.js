'use strict';

const header = document.querySelector('thead');
const body = document.querySelector('tbody');
const headerTitles = [...header.children[0].children];

headerTitles.forEach((title, columnIndex) => {
  title.onclick = (e) => {
    const rows = [...body.children];

    const sorted = rows.sort((rowA, rowB) => {
      let cellA = [...rowA.children][columnIndex].textContent;
      let cellB = [...rowB.children][columnIndex].textContent;

      if (cellA.includes('$') || columnIndex === 2) {
        cellA = +cellA.replace('$', '').replaceAll(',', '');
        cellB = +cellB.replace('$', '').replaceAll(',', '');

        return cellA - cellB;
      }

      return cellA.localeCompare(cellB);
    });

    body.append(...sorted);
  };
});
