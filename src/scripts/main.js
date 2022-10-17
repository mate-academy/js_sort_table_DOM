'use strict';

const tableHeader = document.querySelector('thead');
const tableBody = document.querySelector('tbody');
const tableRow = [...tableBody.querySelectorAll('tr')];

const moneyToNumber = function(str) {
  const withoutDollar = str.split('$').join('');

  return +withoutDollar.split(',').join('');
};

tableHeader.addEventListener('click', (e) => {
  const item = e.target;

  if (!item.matches('th')) {
    return;
  };

  if (item.innerText === 'Name') {
    tableRow.sort((a, b) =>
      a.children[0].innerText.localeCompare(b.children[0].innerText));
  };

  if (item.innerText === 'Position') {
    tableRow.sort((a, b) =>
      a.children[1].innerText.localeCompare(b.children[1].innerText));
  };

  if (item.innerText === 'Age') {
    tableRow.sort((a, b) =>
      +a.children[2].innerText - +b.children[2].innerText);
  };

  if (item.innerText === 'Salary') {
    tableRow.sort((a, b) =>
      moneyToNumber(a.children[3].innerText)
        - moneyToNumber(b.children[3].innerText));
  };

  for (let i = 0; i < (tableRow.length - 1); i++) {
    tableRow[i].after(tableRow[i + 1]);
  };
});
