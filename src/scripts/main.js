'use strict';

const counter = document.querySelectorAll('tr');
const type = document.querySelector('thead');
const list = document.querySelectorAll('td');
const lists = document.querySelectorAll('tr');

const changeToNum = (value) => value.replace('$', '').replace(',', '');

for (let i = 0; i < [...counter].length; i++) {
  for (let y = 0; y < [...counter[i].children].length; y++) {
    counter[i].children[y].count = y;
  }
}

type.addEventListener('click', (e) => {
  const item = e.target;

  sortedList(item.count, list);
});

function sortedList(count, sortList) {
  const arr = [];

  for (let i = 0; i < [...sortList].length; i++) {
    if (count === [...sortList][i].count) {
      arr.push([...sortList][i]);
    }
  }

  const sorted = arr.sort((a, b) => {
    if (isNaN(changeToNum(a.textContent))) {
      return a.textContent.localeCompare(b.textContent);
    }

    return changeToNum(a.textContent) - changeToNum(b.textContent);
  });

  for (let y = 0; y < sorted.length; y++) {
    lists[y + 1].insertBefore(sorted[y], lists[y + 1].children[count]);
  }
};
