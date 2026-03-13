'use strict';

// write code here
const table = document.querySelector('table');
const thead = table.querySelector('thead');
const tbody = table.querySelector('tbody');
const thThead = [...thead.querySelectorAll('th')];

// eslint-disable-next-line no-shadow
thead.addEventListener('click', (event) => {
  const tr = [...tbody.querySelectorAll('tr')];
  const sorting = event.target.closest('th');
  const indexSorting = thThead.indexOf(sorting);

  tr.sort((element1, element2) => {
    return element1.children[indexSorting].textContent.localeCompare(
      element2.children[indexSorting].textContent,
    );
  }).forEach((element) => tbody.appendChild(element));
});
