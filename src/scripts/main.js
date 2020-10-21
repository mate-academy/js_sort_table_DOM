'use strict';

// write code here

const thead = document.querySelector('thead');
const tbody = document.querySelector('tbody');
const tableItems = document.querySelector('tbody').querySelectorAll('tr');

thead.addEventListener('click', ({ target }) => {
  const index = target.cellIndex;
  const sortedTable = sortData(tableItems, index);

  tbody.append(...sortedTable);
});

function normalizeNum(input, i) {
  return input.cells[i].textContent.replace(/[,$]/g, '');
};

function sortData(collection, i) {
  return [...collection].sort((first, next) => {
    const firstValue = normalizeNum(first, i);
    const nextValue = normalizeNum(next, i);

    if (!isNaN(+firstValue)) {
      return firstValue - nextValue;
    }

    return firstValue.localeCompare(nextValue);
  });
};
