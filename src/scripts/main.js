'use strict';

// write code here
const table = document.querySelector('table');
const thead = table.querySelector('thead');
const tbody = table.querySelector('tbody');
const thThead = [...thead.querySelectorAll('th')];

function parseValue(value) {
  const cleaned = value.replace(/[^0-9.-]/g, '');
  const number = Number(cleaned);

  return cleaned === '' || Number.isNaN(number) ? value : number;
}

// eslint-disable-next-line no-shadow
thead.addEventListener('click', (event) => {
  const tr = [...tbody.querySelectorAll('tr')];
  const sorting = event.target.closest('th');
  const indexSorting = thThead.indexOf(sorting);

  if (!sorting) {
    return;
  }

  tr.sort((element1, element2) => {
    const a = parseValue(element1.children[indexSorting].textContent.trim());
    const b = parseValue(element2.children[indexSorting].textContent.trim());

    if (typeof a === 'number' && typeof b === 'number') {
      return a - b;
    }

    return a.localeCompare(b);
  }).forEach((element) => tbody.appendChild(element));
});
