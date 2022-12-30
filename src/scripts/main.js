'use strict';

const head = document.querySelector('thead');
const headRow = [...head.firstElementChild.children];
const body = document.querySelector('tbody');
const rows = [...body.children];

head.addEventListener('click', e => {
  const header = e.target.closest('th');

  body.append(...sortTable(header));
});

function sortTable(th) {
  switch (th) {
    case headRow[0]:
      return rows.sort((a, b) => a.children[0].textContent
        .localeCompare(b.children[0].textContent));

    case headRow[1]:
      return rows.sort((a, b) => a.children[1].textContent
        .localeCompare(b.children[1].textContent));

    case headRow[2]:
      return rows.sort((a, b) => a.children[2].textContent
        - b.children[2].textContent);

    case headRow[3]:
      return rows.sort((a, b) => convertToNumber(a.children[3].textContent)
        - convertToNumber(b.children[3].textContent));
  }
}

function convertToNumber(str) {
  return +str.slice(1).split(',').join('');
}
