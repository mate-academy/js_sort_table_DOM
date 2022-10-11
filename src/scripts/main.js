'use strict';

const heading = document.querySelector('thead').firstElementChild;
const headingItems = [...heading.querySelectorAll('th')];
const tableBody = document.querySelector('tbody');
const tableRows = [...tableBody.children];

headingItems.forEach(item => item.setAttribute('class', 'column'));
headingItems[0].dataset.type = 'text';
headingItems[1].dataset.type = 'text';
headingItems[2].dataset.type = 'number';
headingItems[3].dataset.type = 'salary';

function tableSort(column) {
  const index = headingItems.indexOf(column);

  const callbackSort = (rowA, rowB) => {
    const first = rowA.children[index].innerText;
    const second = rowB.children[index].innerText;

    const transformSalary = (cell) => {
      return cell.slice(1).split(',').join('');
    };

    if (column.dataset.type === 'text') {
      return first.localeCompare(second);
    } else if (column.dataset.type === 'salary') {
      return transformSalary(first)
      - transformSalary(second);
    } else if (column.dataset.type === 'number') {
      return first - second;
    }
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
