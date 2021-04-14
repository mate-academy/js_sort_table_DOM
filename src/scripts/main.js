'use strict';

const head = document.querySelector('thead').querySelector('tr');
const body = document.querySelector('tbody');
const sortedBody = [...body.querySelectorAll('tr')];

const mySort = (arr, index) => {
  if (index === 3) {
    arr.sort((a, b) => {
      const first = Number(a.children[index].textContent
        .slice(1).split(',').join(''));
      const second = Number(b.children[index].textContent
        .slice(1).split(',').join(''));

      return first - second;
    });
  } else if (index === 2) {
    arr.sort((a, b) => {
      return a.children[index].textContent - b.children[index].textContent;
    });
  } else {
    arr.sort((a, b) => {
      return a.children[index].textContent
        .localeCompare(b.children[index].textContent);
    });
  }
};

document.querySelector('thead').addEventListener('click', (e) => {
  const item = e.target;
  const index = [...head.querySelectorAll('th')].findIndex(td => {
    return item.textContent === td.textContent;
  });

  mySort(sortedBody, index);
  body.prepend(...sortedBody);
});
