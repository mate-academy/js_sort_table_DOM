'use strict';

const heading = document.querySelector('thead').firstElementChild;
const headingItems = [...heading.querySelectorAll('th')];
const tableBody = document.querySelector('tbody');
const tableRows = [...tableBody.children];

headingItems.forEach(item => item.setAttribute('class', 'column'));

function tableSort(column) {
  const index = headingItems.indexOf(column);

  const callbackSort = (rowA, rowB) => {
    const first = rowA.children[index].innerText;
    const second = rowB.children[index].innerText;

    if (index <= 1) {
      return first.localeCompare(second);
    } else if (index === 3) {
      return first.slice(1).split(',').join('')
      - second.slice(1).split(',').join('');
    }

    return first - second;
  };

  const sorted = tableRows.sort(callbackSort);

  tableRows.forEach(item => item.remove());
  sorted.forEach(item => tableBody.append(item));
}

heading.addEventListener('click', (e) => {
  const item = e.target.closest('.column');

  if (!item || !heading.contains(item)) {
    return;
  }

  tableSort(item);
});
