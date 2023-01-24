'use strict';

const tableHead = document.querySelector('thead');
const tableBody = document.querySelector('tbody');
const tableRows = [...tableBody.children];

function tranformToNumber(element) {
  const array = element.children[3].textContent.slice(1).split(',');

  return +(array[0] + array[1]);
}

function sortArray(array, index) {
  array.sort((one, two) => {
    const oneElem = one.children[index].textContent;
    const secondElem = two.children[index].textContent;

    if (oneElem.includes('$')) {
      return tranformToNumber(one) - tranformToNumber(two);
    }

    return oneElem.localeCompare(secondElem);
  });
}

tableHead.addEventListener('click', even => {
  sortArray(tableRows, even.target.cellIndex);

  if (even.target.dataset.clicked === undefined) {
    for (const child of tableRows) {
      tableBody.append(child);
    }
    even.target.dataset.clicked = true;

    return;
  };

  if (even.target.dataset.clicked === 'true') {
    for (const child of tableRows) {
      tableBody.prepend(child);
    }
    even.target.removeAttribute('data-clicked');
  };
});
