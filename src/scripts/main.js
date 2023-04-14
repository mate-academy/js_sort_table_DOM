'use strict';

const table = document.querySelector('table');
const nav = table.firstElementChild;
const rawRows = [...table.children[1].children];

const sortRows = (arr, index) => {
  return arr.sort((a, b) => {
    const valueA = a.children[index].textContent;
    const valueB = b.children[index].textContent;

    switch (index) {
      case 2:
        return valueA - valueB;
      case 3:
        return Number.parseInt(valueA.slice(1))
        - Number.parseInt(valueB.slice(1));
      default:
        return valueA > valueB ? 1 : valueA < valueB ? -1 : 0;
    }
  });
};

nav.addEventListener('click', (e) => {
  const sortBy = e.target;
  const targetIndex = [...nav.firstElementChild.children].indexOf(sortBy);

  const sortedRows = sortRows([...rawRows], targetIndex);

  for (let i = 0; i < sortedRows.length; i++) {
    table.children[1].append(sortedRows[i]);
  }
});
