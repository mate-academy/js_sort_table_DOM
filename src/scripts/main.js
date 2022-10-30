'use strict';

const listTable = [...document.querySelectorAll('tr')].slice(1, -1);
const headerTable = document.querySelector('tr');
const table = document.querySelector('tbody');

const convertNum = salary => +salary.slice(1).split(',').join('');

headerTable.addEventListener('click', e => {
  let sort;

  switch (e.target.innerText) {

    case 'Name':
      sort = listTable.sort((a, b) => {
        return a.children[0].innerText.localeCompare(b.children[0].innerText);
      });

      table.append(...sort);
      break;

    case 'Position':
      sort = listTable.sort((a, b) => {
        return a.children[1].innerText.localeCompare(b.children[1].innerText);
      });

      table.append(...sort);
      break;

    case 'Age':
      sort = listTable.sort((a, b) => {
        return a.children[2].innerText - b.children[2].innerText;
      });

      table.append(...sort);
      break;

    case 'Salary':
      sort = listTable.sort((a, b) => {
        return convertNum(a.children[3].innerText)
          - convertNum(b.children[3].innerText);
      });

      table.append(...sort);
  }
});
