'use strict';

const sortCollumn = (el) => {
  const targetCellIndex = el.target.cellIndex;
  const targetCellName = el.target.textContent;

  const tbodyElement = document.querySelector('tbody');

  const sortedElements = sortElements(
    Object.values(tbodyElement.rows),
    targetCellIndex,
    targetCellName,
  );

  for (const element of sortedElements) {
    tbodyElement.prepend(element);
  }
};

function prepareValueToCompare(value) {
  return parseInt(value.slice(1));
}

function sortElements(elements, cellIndex, sortBy) {
  return elements.sort((firstEl, secondEl) => {
    let firstElementValue = firstEl.cells[cellIndex].textContent;
    let secondElementValue = secondEl.cells[cellIndex].textContent;

    if (sortBy === 'Salary') {
      firstElementValue = prepareValueToCompare(firstElementValue);
      secondElementValue = prepareValueToCompare(secondElementValue);
    }

    if (firstElementValue < secondElementValue) {
      return 1;
    }

    return -1;
  });
}

const theadElement = document.querySelector('thead');

theadElement.addEventListener('click', sortCollumn);
