'use strict';

const tableHeader = document.querySelector('thead');
const tableBody = document.querySelector('tbody');

function indexOfSortColumn(key) {
  const keys = ['Name', 'Position', 'Age', 'Salary'];

  return keys.indexOf(key);
}

tableHeader.addEventListener('click', (e) => {
  const index = indexOfSortColumn(e.target.textContent);

  const bodyChildren = [...tableBody.children];

  bodyChildren.sort((rowA, rowB) => {
    let textA = rowA.children[index].textContent;
    let textB = rowB.children[index].textContent;

    if (textA.startsWith('$')) {
      textA = +textA.slice(1).replace(/,/g, '');
      textB = +textB.slice(1).replace(/,/g, '');
    }

    const isNotNumber = isNaN(Number(textA));

    if (isNotNumber) {
      return textA.localeCompare(textB);
    } else {
      return textA - textB;
    }
  });

  for (const child of bodyChildren) {
    tableBody.appendChild(child);
  }
});
