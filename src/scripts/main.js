'use strict';

const tabletHeader = document.querySelector('thead');
const tabletBody = document.querySelector('tbody');

const changeToNum = (value) => +value.replace('$', '').replace(',', '');

tabletHeader.addEventListener('click', (e) => {
  const item = e.target;
  const contents = [...tabletHeader.children[0].children];
  const indexContents = contents.findIndex(elem => elem === item);

  sortList(indexContents, tabletBody);
});

function sortList(index, list) {
  const children = [...list.children];

  const sorted = children.sort((a, b) => {
    const prev = a.children[index].textContent;
    const next = b.children[index].textContent;

    if (isNaN(changeToNum(prev))) {
      return prev.localeCompare(next);
    }

    return changeToNum(prev) - changeToNum(next);
  });

  tabletBody.append(...sorted);
};
