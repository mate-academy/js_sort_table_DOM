'use strict';

const table = document.querySelector('table');
const nav = table.firstElementChild;
const rawRows = [...table.children[1].children];

const sortRows = (arr, index) => {
  return arr.sort((a, b) => {
    const compareValueA = a.children[index].textContent;
    const compareValueB = b.children[index].textContent;

    return index === 2
      ? compareValueA - compareValueB
      : index === 3
        ? Number.parseInt(compareValueA.slice(1))
        - Number.parseInt(compareValueB.slice(1))
        : compareValueA > compareValueB
          ? 1 : compareValueA < compareValueB ? -1 : 0;
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
