'use strict';

const tableHead = document.querySelector('thead');
const tableBody = document.querySelector('tbody');
const bodyRows = [...tableBody.querySelectorAll('tr')];

tableHead.addEventListener('click', (e) => {
  const cellIndex = e.target.cellIndex;
  const rowsAfterSort = sortedTable(cellIndex, bodyRows);

  tableHead.append(...rowsAfterSort);
});

function sortedTable(index, table) {
  let sortedList = table.sort((a, b) => a.children[index]
    .innerText
    .localeCompare(b.children[index].innerText
    ));

  if (index === 2) {
    sortedList = table.sort((a, b) => Number(a.children[index].innerText)
      - Number(b.children[index].innerText));
  }

  if (index === 3) {
    sortedList = table.sort((a, b) => Number(a.children[index]
      .innerText
      .replace(/\$|,/g, '')) - Number(b.children[index]
      .innerText
      .replace(/\$|,/g, '')));
  }

  return sortedList;
}
