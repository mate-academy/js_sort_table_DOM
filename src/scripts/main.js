'use strict';

const thead = document.querySelector('thead');
const theadRow = thead.querySelector('tr');
const tbody = document.querySelector('tbody');
const rows = [...tbody.querySelectorAll('tr')];
const columnHeadersArr = [...theadRow.querySelectorAll('th')];
let column;

theadRow.onclick = (e) => {
  switch (e.target) {
    case columnHeadersArr[0]:
      column = 0;
      break;
    case columnHeadersArr[1]:
      column = 1;
      break;
    case columnHeadersArr[2]:
      column = 2;
      break;
    case columnHeadersArr[3]:
      column = 3;
      break;
  }

  if (isNaN(+(rows[0]
    .children[column].textContent
    .replace(/\D/, '').replace(',', '')))) {
    rows.sort((a, b) => a.children[column]
      .textContent
      .localeCompare(b.children[column].textContent));
    rows.forEach(row => tbody.append(row));
  } else {
    rows.sort((a, b) => {
      const firstValue = a.children[column].textContent;
      const secondValue = b.children[column].textContent;

      return +(firstValue.replace(/\D/, '').replace(',', ''))
          - +(secondValue.replace(/\D/, '').replace(',', ''));
    });
    rows.forEach(row => tbody.append(row));
  }
};
