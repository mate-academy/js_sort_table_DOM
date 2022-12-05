'use strict';

const tableHead = document.querySelector('thead');
const tableBody = document.querySelector('tbody');
const rows = [...tableBody.rows];

tableHead.addEventListener('click', (handler) => {
  const header = handler.target.closest('th').innerText;

  switch (header) {
    case 'Name':
      rows.sort((a, b) =>
        (a.children[0].innerText).localeCompare(b.children[0].innerText));
      break;

    case 'Position':
      rows.sort((a, b) =>
        (a.children[1].innerText).localeCompare(b.children[1].innerText));
      break;

    case 'Age':
      rows.sort((a, b) =>
        (a.children[2].innerText) - (b.children[2].innerText));
      break;

    case 'Salary':
      rows.sort((a, b) =>
        ((+a.children[3].innerText.slice(1).replace(/,/g, ''))
          - (+b.children[3].innerText.slice(1).replace(/,/g, ''))));
      break;
  }

  rows.forEach(item => tableBody.append(item));
});
