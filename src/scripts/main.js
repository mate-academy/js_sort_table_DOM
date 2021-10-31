'use strict';

// write code here
const table = document.querySelector('table');

function sortTable(event) {
  let childNumber;
  const header = document.querySelectorAll('th');

  childNumber = [...header].findIndex(item =>
    item.textContent === event.target.textContent);

  const data = document.querySelectorAll('tbody tr');
  let sorted;

  console.log(typeof +data[0].children[childNumber].textContent);

  if (childNumber === 2) {
    sorted = [...data].sort((a, b) =>
      a.children[childNumber].textContent -
      b.children[childNumber].textContent);
  }

  function salatyToNumber(string) {
    let number = string.split('$');

    number = number[1].split(',').join('');

    return number;
  }

  if (childNumber === 3) {
    sorted = [...data].sort((a, b) =>
      salatyToNumber(a.children[childNumber].textContent)
      - salatyToNumber(b.children[childNumber].textContent));
  }

  if (childNumber === 0 || childNumber === 1) {
    sorted = [...data].sort((a, b) => {
      return a.children[childNumber].textContent.localeCompare(b.children[childNumber].textContent);
    });
  }

  sorted.forEach(item => {
    const body = document.querySelector('tbody');

    body.append(item);
  });
}

table.addEventListener('click', sortTable);
