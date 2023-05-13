'use strict';

const header = document.querySelector('tr');
const tbody = document.querySelector('tbody');
const rowsArray = tbody.children;

header.addEventListener('click', (e) => {
  let sorted;

  if (e.target.innerText === 'Name') {
    sorted = [...rowsArray].sort((a, b) =>
      a.children[0].innerText.localeCompare(b.children[0].innerText));
  }

  if (e.target.innerText === 'Age') {
    sorted = [...rowsArray].sort((a, b) =>
      a.children[2].innerText - b.children[2].innerText);
  }

  if (e.target.innerText === 'Salary') {
    sorted = [...rowsArray].sort((a, b) =>
      toNumber(a.children[3]) - toNumber(b.children[3]));
  }

  tbody.prepend(...sorted);
});

function toNumber(element) {
  return +element.innerText.slice(1).replaceAll(',', '');
};
