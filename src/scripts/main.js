'use strict';

const header = document.querySelector('tr');
const tbody = document.querySelector('tbody');
const rowsArray = tbody.children;

header.addEventListener('click', (e) => {
  let sorted;

  switch (e.target.innerText) {
    case 'Name':
      sorted = [...rowsArray].sort((a, b) =>
        a.children[0].innerText.localeCompare(b.children[0].innerText));
      break;

    case 'Position':
      sorted = [...rowsArray].sort((a, b) =>
        a.children[1].innerText.localeCompare(b.children[1].innerText));
      break;

    case 'Age':
      sorted = [...rowsArray].sort((a, b) =>
        a.children[2].innerText - b.children[2].innerText);
      break;

    case 'Salary':
      sorted = [...rowsArray].sort((a, b) =>
        toNumber(a.children[3]) - toNumber(b.children[3]));
      break;

    default:
      sorted = [...rowsArray];
  }

  tbody.prepend(...sorted);
});

function toNumber(element) {
  return +element.innerText.slice(1).replaceAll(',', '');
};
