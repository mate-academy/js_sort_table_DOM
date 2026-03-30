'use strict';

// write code here
const tbodyContainer = document.querySelector('tbody');
const trItemes = [...tbodyContainer.querySelectorAll('tr')];
const listTitles = document.querySelector('thead');

const getCleanItemes = (iteme, index) => {
  const cleanIteme = iteme.cells[index].textContent;

  return Number(cleanIteme.replace(/[$,]/g, ''));
};

function normalizeListObj(row) {
  return row.map((el) => {
    return {
      name: el.cells[0].textContent.toLowerCase(),
      position: el.cells[1].textContent.toLowerCase(),
      age: getCleanItemes(el, 2),
      salary: getCleanItemes(el, 3),
      node: el,
    };
  });
}

function sortList(list, key) {
  const newList = list.sort((a, b) => {
    if (typeof a[key] === 'number' && typeof b[key] === 'number') {
      return a[key] - b[key];
    } else if (a[key] === b[key]) {
      return 0;
    } else {
      return a[key] < b[key] ? -1 : 1;
    }
  });

  newList.forEach((element) => {
    return tbodyContainer.append(element.node);
  });

  return newList;
}

const sortedData = sortList(normalizeListObj(trItemes), 'name');

listTitles.addEventListener('click', (togleTitle) => {
  const checkedTitle = togleTitle.target.closest('th');
  const titleValue = checkedTitle.textContent.toLowerCase();

  if (!checkedTitle) {
    return;
  }

  sortList(sortedData, titleValue);
});
