'use strict';

const tbody = document.querySelector('tbody');
const thead = document.querySelector('thead').firstElementChild.children;

function sortList(list, index) {
  const sortedList = [...list.children].sort((prev, cur) => {
    let a = prev.children[index].textContent;
    let b = cur.children[index].textContent;

    if (a.includes('$')) {
      a = +a.replace(/[$,]/g, '');
      b = +b.replace(/[$,]/g, '');

      return a - b;
    }

    return a > b ? 1 : a < b ? -1 : 0;
  });

  list.append(...sortedList);
}

for (let i = 0; i < thead.length; i++) {
  thead[i].addEventListener('click', (eventFilter) => {
    sortList(tbody, i);
  });
}
