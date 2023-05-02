'use strict';

const tBody = document.querySelector('tbody');

function toSort(a, b) {
  if (a.lastElementChild.innerHTML < b.lastElementChild.innerHTML) {
    return -1;
  } else if (a.lastElementChild.innerHTML > b.lastElementChild.innerHTML) {
    return 1;
  }

  return 0;
}

document.querySelector('thead').addEventListener(
  'click', e => {
    const item = e.target;

    if (item.tagName === 'TH') {
      const trList = [...tBody.children];
      const sortedTables = trList.sort(toSort);

      sortedTables.forEach(elem => {
        document.querySelector('tbody').appendChild(elem);
      });

      tBody.prepend(trList[trList.length - 1]);
    }
  },
);
