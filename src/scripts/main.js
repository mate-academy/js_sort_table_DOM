'use strict';

const headers = document.querySelector('thead');
const tableBody = document.querySelector('tbody');
const rows = [...tableBody.querySelectorAll('tr')];

const convertToNumber = (str) => {
  return +parseFloat(str.slice(1));
};

const sortTable = (elem) => {
  const item = elem.target;

  if (!item.matches('th')) {
    return;
  };

  if (item.innerText === 'Name') {
    rows.sort((a, b) =>
      a.children[0].innerText.localeCompare(b.children[0].innerText));
  };

  if (item.innerText === 'Position') {
    rows.sort((a, b) =>
      a.children[1].innerText.localeCompare(b.children[1].innerText));
  };

  if (item.innerText === 'Age') {
    rows.sort((a, b) =>
      +a.children[2].innerText - +b.children[2].innerText);
  };

  if (item.innerText === 'Salary') {
    rows.sort((a, b) =>
      convertToNumber(a.children[3].innerText)
      - convertToNumber(b.children[3].innerText));
  };

  for (let i = 0; i < (rows.length - 1); i++) {
    rows[i].after(rows[i + 1]);
  };
};

headers.addEventListener('click', sortTable);
