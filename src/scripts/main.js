'use strict';

// write code here
function salatyToNumber(string) {
  let number = string.split('$');

  number = number[1].split(',').join('');

  return number;
}

const body = document.querySelector('tbody');

const table = document.querySelector('table');

function sortTable(e) {
  const header = document.querySelectorAll('th');

  const childNumber = [...header].findIndex(item =>
    item.textContent === e.target.textContent);

  const data = document.querySelectorAll('tbody tr');
  let sorted;

  switch (event.target.textContent) {
    case 'Age':
      sorted = [...data].sort((a, b) =>
        a.children[childNumber].textContent
        - b.children[childNumber].textContent);
      break;

    case 'Salary':
      sorted = [...data].sort((a, b) =>
        salatyToNumber(a.children[childNumber].textContent)
        - salatyToNumber(b.children[childNumber].textContent));
      break;

    case 'Name':
      sorted = [...data].sort((a, b) =>
        a.children[childNumber].textContent.localeCompare(
          b.children[childNumber].textContent)
      );
      break;

    case 'Position':
      sorted = [...data].sort((a, b) =>
        a.children[childNumber].textContent.localeCompare(
          b.children[childNumber].textContent)
      );
      break;
  }

  sorted.forEach(item => {
    body.append(item);
  });
}

table.addEventListener('click', sortTable);
