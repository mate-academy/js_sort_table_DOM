'use strict';

const head = document.querySelector('thead');
const body = document.querySelector('tbody');
const bodychildren = [...body.children];

function transformationNumber(element) {
  const array = element.children[3].textContent.slice(1).split(',');

  return +(array[0] + array[1]);
}

function sortArray(array, index) {
  array.sort((one, two) => {
    const oneElem = one.children[index].textContent;
    const secondElem = two.children[index].textContent;

    if (oneElem.includes('$')) {
      return transformationNumber(one) - transformationNumber(two);
    }

    return oneElem.localeCompare(secondElem);
  });
}

head.addEventListener('click', even => {
  sortArray(bodychildren, even.target.cellIndex);

  if (even.target.dataset.clicked === undefined) {
    for (const child of bodychildren) {
      body.append(child);
    }
    even.target.dataset.clicked = true;

    return;
  };

  if (even.target.dataset.clicked === 'true') {
    for (const child of bodychildren) {
      body.prepend(child);
    }
    even.target.removeAttribute('data-clicked');
  };
});
