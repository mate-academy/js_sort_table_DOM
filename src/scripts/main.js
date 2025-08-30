'use strict';

const allPosts = document.querySelector('table');
const nameFilters = allPosts.querySelector('thead');
const tContent = allPosts.querySelector('tbody');
const rowsArray = Array.from(tContent.rows);

const sortedRows = [...nameFilters.firstElementChild.children];

sortedRows.map((el, index) => {
  el.addEventListener('click', (e) => {
    rowsArray.sort((a, b) => {
      const cellA = a.cells[index].textContent.trim();
      const cellB = b.cells[index].textContent.trim();

      const aNum = Number(cellA.replace('$', '').replace(',', ''));
      const bNum = Number(cellB.replace('$', '').replace(',', ''));

      if (index === 0 || index === 1) {
        return cellA.localeCompare(cellB);
      } else if (index === 2) {
        return Number(cellA) - Number(cellB);
      } else if (index === 3) {
        return aNum - bNum;
      }
    });

    while (tContent.firstChild) {
      tContent.removeChild(tContent.firstChild);
    }

    rowsArray.forEach((row) => tContent.appendChild(row));
  });
});
