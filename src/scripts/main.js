'use strict';

// write code here
const tableHeaderItems = document.querySelector('thead');
const tableBody = document.querySelector('tbody');
const rows = [...document.querySelectorAll('tbody > tr')];

tableHeaderItems.addEventListener('click', (e) => {
  const index = e.target.cellIndex;

  if (index === 3) {
    rows.map(item => item.setAttribute('data-sort',
      `${convertToNumber(item.children[index].innerText)}`));

    rows.sort((value1, value2) => {
      return value1.dataset.sort - value2.dataset.sort;
    });
  } else {
    rows.map(item => item.setAttribute('data-sort',
      `${item.children[index].innerText}`));

    rows.sort((value1, value2) => {
      return (value1.dataset.sort > value2.dataset.sort) ? 1 : -1;
    });
  }

  tableBody.append(...rows);
});

function convertToNumber(string) {
  return +string.split('$').join('').split(',').join('');
}
