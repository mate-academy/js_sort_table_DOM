'use strict';

const table = document.querySelector('table');
const tableBody = document.querySelector('tbody');
const rows = [...tableBody.querySelectorAll('tr')];
const tableTitle = ['Name', 'Position', 'Age', 'Salary'];

table.addEventListener('click', event => {
  const title = event.target.closest('th');

  const sortBy = title.textContent;

  rows.sort((a, b) => {
    const index = tableTitle.indexOf(sortBy);
    const prevItem = a.children[index].textContent;
    const nextItem = b.children[index].textContent;

    if (prevItem.includes('$')) {
      return parseFloat(prevItem.replace(',', '.').replace('$', ''))
        - parseFloat(nextItem.replace(',', '.').replace('$', ''));
    }

    if (+prevItem.typeOf !== 'number') {
      return prevItem.localeCompare(nextItem);
    }

    return +prevItem - +nextItem;
  });

  tableBody.append(...rows);
});
