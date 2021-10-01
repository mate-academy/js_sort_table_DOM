'use strict';

// write code here
const table = document.querySelector('table');
const tableNavigation = table.querySelector('thead');
const tableBody = table.querySelector('tbody');
const tableBodyRows = Array.from(table.querySelector('tbody').rows);

const sortTable = (index, sortMethod = 1) => {
  tableBodyRows.sort((a, b) => {
    let partA = a.children[index].innerHTML;
    let partB = b.children[index].innerHTML;

    if (sortMethod) {
      partA = partA.replace(/\D/g, '');
      partB = partB.replace(/\D/g, '');

      return partA - partB;
    } else {
      return partA.localeCompare(partB);
    }
  }).map(el => tableBody.append(el));
};

tableNavigation.addEventListener('click', (e) => {
  const index = Array.from(e.target.parentElement.children)
    .findIndex(el => el.innerHTML === e.target.innerHTML);

  const methodSort = index <= 1 ? 0 : 1;

  sortTable(index, methodSort);
});
