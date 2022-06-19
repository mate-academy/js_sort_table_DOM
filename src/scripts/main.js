'use strict';

const headers = [...document.querySelector('tr').children];
const tBody = document.querySelector('tbody');
const rows = tBody.rows;

const sortingTable = (ind) => {
  const sortedTable = [...rows].sort((row1, row2) => {
    if (ind === 3) {
      return (row1.children[ind].textContent.replace(/[$,]/g, ''))
        - (row2.children[ind].textContent.replace(/[$,]/g, ''));
    }

    return row1.children[ind].textContent
      .localeCompare(row2.children[ind].textContent);
  });

  tBody.replaceChildren(...sortedTable);
};

headers.forEach((header, index) => {
  header.addEventListener('click', () => {
    sortingTable(index);
  });
});
