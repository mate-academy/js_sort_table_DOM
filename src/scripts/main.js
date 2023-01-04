'use strict';

const table = document.querySelector('table');
const tableHeader = table.rows[0];

tableHeader.addEventListener('click', e => {
  const item = e.target.closest('th');

  if (!item || !tableHeader.contains(item)) {
    return null;
  }

  const index = e.target.cellIndex;

  tableSort(index);
});

function tableSort(index) {
  const arr = Array.from(table.querySelectorAll('tbody tr'));

  arr.sort((a, b) => {
    let aValue = a.children[index].innerText;
    let bValue = b.children[index].innerText;

    if (aValue.includes('$')) {
      aValue = aValue.slice(1).replace(',', '');
      bValue = bValue.slice(1).replace(',', '');

      return aValue - bValue;
    }

    return aValue.localeCompare(bValue);
  });

  arr.forEach(elem => {
    table.querySelector('tbody').appendChild(elem);
  });
}
