'use strict';

// write code here

const thead = document.querySelector('thead');
const tbody = document.querySelector('tbody');
const tableItems = document.querySelector('tbody').querySelectorAll('tr');

thead.addEventListener('click', ({ target }) => {
  const index = target.cellIndex;
  const sorted = sortData(tableItems, index);

  tbody.append(...sorted);
});

function normalizeNum(input, i) {
  return input.cells[i].textContent.replace(/[,$]/g, '');
};

function sortData(collection, i) {
  return [...collection].sort((a, b) => {
    const aItem = normalizeNum(a, i);
    const bItem = normalizeNum(b, i);

    if (!isNaN(+aItem)) {
      return aItem - bItem;
    }

    return aItem.localeCompare(bItem);
  });
};
