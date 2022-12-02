'use strict';

const headTable = document.querySelector('thead');
const bodyTable = document.querySelector('tbody');

const headers = getFieldsFromRow(headTable.firstElementChild);

const arr = [];

function getFieldsFromRow(element) {
  const result = [];

  for (const item of element.children) {
    result.push(item.innerText);
  }

  return result;
}

for (const row of bodyTable.children) {
  arr.push(getFieldsFromRow(row));
}

const sortItems = (items, index) => {
  items.sort((a, b) => {
    if (+a[index].replace(/\D/g, '')) {
      return a[index].replace(/\D/g, '') - b[index].replace(/\D/g, '');
    } else {
      return a[index].localeCompare(b[index]);
    }
  });

  for (let i = 0; i < bodyTable.children.length; i++) {
    for (let j = 0; j < bodyTable.children[i].children.length; j++) {
      bodyTable.children[i].children[j].innerText = items[i][j];
    }
  }
};

for (const item of headTable.firstElementChild.children) {
  item.addEventListener('click', e => {
    sortItems(arr, headers.indexOf(e.target.innerText));
  });
}
