'use strict';

const header = document.querySelector('thead tr');
const columns = document.querySelectorAll('tbody tr');

header.addEventListener('click', e => {
  e.preventDefault();

  const headerIndex = [...e.target.parentNode.children]
    .findIndex(item => item === e.target);

  sortTableByColumn(headerIndex);
});

function sortTableByColumn(headerIndex) {
  const sortArr = (headerIndex === 3)
    ? sortBySalaryColumn(headerIndex)
    : sortByRestColumns(headerIndex);

  for (let y = 0; y < [...columns].length; y++) {
    for (let x = 0; x < [...columns][y].children.length; x++) {
      [...columns][y].children[x].textContent = sortArr[y][x];
    }
  }
}

function sortBySalaryColumn(index) {
  return [...columns]
    .map(item => [...item.children]
      .map(iteM => iteM.textContent))
    .sort((item1, item2) => +item1[index].slice(1).replace(/,/g, '.')
      - (+item2[index].slice(1).replace(/,/g, '.')));
}

function sortByRestColumns(index) {
  return [...columns]
    .map(item => [...item.children]
      .map(iteM => iteM.textContent))
    .sort((item1, item2) => item1[index]
      .localeCompare(item2[index]));
}
