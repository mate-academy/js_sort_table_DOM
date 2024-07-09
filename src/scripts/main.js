'use strict';

const tableRows = [...document.querySelector('tbody').rows];
const tHead = document.querySelector('thead');
const searchIdnx = {};

for (let i = 0; i < tHead?.rows[0].cells.length; i++) {
  searchIdnx[tHead?.rows[0].cells[i].textContent] = i;
}

tHead?.addEventListener('click', (e) => {
  const sortByIndx = searchIdnx[e.target.textContent];

  tableRows.sort((a, b) => {
    const aClean = a.cells[sortByIndx].textContent
      ?.replace('$', '')
      .replace(',', '');
    const bClean = b.cells[sortByIndx].textContent
      .replace('$', '')
      .replace(',', '');

    if (isNaN(aClean)) {
      return a.cells[sortByIndx].textContent?.localeCompare(
        b.cells[sortByIndx].textContent,
      );
    } else {
      return parseFloat(aClean) - parseFloat(bClean);
    }
  });

  tableRows.forEach((row) => document.querySelector('tbody')?.append(row));
});
