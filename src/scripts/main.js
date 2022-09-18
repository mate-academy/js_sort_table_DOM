'use strict';

const bodyOfTable = document.querySelector('tbody');

const headOfTable = document.querySelector('tHead > tr');

const tableRows = [...bodyOfTable.rows];

headOfTable.addEventListener('click', () => {
  const index = event.target.cellIndex;

  const answ = conversion(index, tableRows);

  answ.forEach(element => bodyOfTable.append(element));
});

function conversion(cellIndex, array) {
  let arrayByName;

  switch (cellIndex) {
    case 0:
    case 1:
      arrayByName = array.sort((a, b) => {
        const first = a.children[cellIndex];
        const second = b.children[cellIndex];

        return first.innerText.localeCompare(second.innerText);
      });
      break;

    case 2:
      arrayByName = array.sort((a, b) =>
        a.children[2].innerText - b.children[2].innerText);
      break;

    case 3:
      arrayByName = array.sort((a, b) => {
        const first = a.children[3].innerText.slice(1).replace(',', '.');
        const second = b.children[3].innerText.slice(1).replace(',', '.');

        return +first - +second;
      });
  }

  return arrayByName;
}
