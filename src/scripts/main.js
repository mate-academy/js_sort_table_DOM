/* eslint-disable function-paren-newline */
'use strict';

const headRow = document.querySelector('thead tr');
const headers = [...document.querySelectorAll('thead tr th')];

headRow.addEventListener('click', (e) => {
  const header = e.target.closest('th');

  if (!header) {
    return;
  }

  const index = headers.indexOf(header);
  const rows = [...document.querySelectorAll('tbody tr')];
  let filteredList;

  const headerText = header.innerText;

  switch (headerText) {
    case 'Name':
    case 'Position':
      filteredList = rows.sort((a, b) =>
        a.children[index].innerText.localeCompare(b.children[index].innerText),
      );
      break;
    case 'Age':
      filteredList = rows.sort(
        (a, b) => +a.children[index].innerText - +b.children[index].innerText,
      );
      break;
    case 'Salary':
      filteredList = rows.sort(
        (a, b) =>
          +a.children[index].innerText.slice(1).split(',').join('') -
          +b.children[index].innerText.slice(1).split(',').join(''),
      );
      break;
    default:
      return;
  }

  const tbody = document.querySelector('tbody');

  filteredList.forEach((row) => tbody.append(row));
});
