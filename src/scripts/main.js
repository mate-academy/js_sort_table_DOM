'use strict';

const counter = document.querySelectorAll('tr');
const listName = document.querySelector('thead');
const list = document.querySelector('tbody');

const changeToNum = (value) => value.replace('$', '').replace(',', '');

for (let i = 0; i < [...counter].length; i++) {
  for (let y = 0; y < [...counter[i].children].length; y++) {
    counter[i].children[y].count = y;
  }
}

listName.addEventListener('click', (e) => {
  const item = e.target;

  sortedList(item.count, list);
});

function sortedList(count, sortList) {
  const arr = [];

  for (let i = 0; i < sortList.children.length; i++) {
    arr.push(sortList.children[i]);
  }

  const sorted = arr.sort((a, b) => {
    const prev = [...a.children].find(item => item.count === count);
    const next = [...b.children].find(item => item.count === count);

    if (isNaN(changeToNum(prev.textContent))) {
      return prev.textContent.localeCompare(next.textContent);
    }

    return changeToNum(prev.textContent) - changeToNum(next.textContent);
  });

  for (let y = 0; y < sorted.length; y++) {
    list.append(sorted[y]);
  }
};
