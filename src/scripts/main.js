'use strict';

// write code here

const thead = document.querySelector('thead');
const headItems = thead.querySelectorAll('th');
const tbody = document.querySelector('tbody');
const tableItems = document.querySelector('tbody').querySelectorAll('tr');

thead.addEventListener('click', (e) => {
  const columnName = e.target.innerText;
  const index = findIndex(columnName);
  const sorted = sortData(tableItems, index);

  tbody.append(...sorted);
});

function findIndex(data) {
  for (let i = 0; i < headItems.length; i++) {
    if (headItems[i].innerText === data) {
      return i;
    }
  };
};

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
