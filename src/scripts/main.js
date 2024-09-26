'use strict';

const headers = document.querySelectorAll('thead th');
const tableBody = document.querySelector('tbody');
const lines = [...document.querySelectorAll('tbody tr')];

headers.forEach(header => {
  header.addEventListener('click', e => {
    switch (e.target.textContent) {
      case 'Name':
        lines.sort((a, b) =>
          a.children[0].textContent.localeCompare(b.children[0].textContent));
        break;
      case 'Position':
        lines.sort((a, b) =>
          a.children[1].textContent.localeCompare(b.children[1].textContent));
        break;
      case 'Age':
        lines.sort((a, b) =>
          +a.children[2].textContent - +b.children[2].textContent);
        break;
      case 'Salary':
        lines.sort((a, b) =>
          +a.children[3].textContent.replace(',', '').replace('$', '')
          - +b.children[3].textContent.replace(',', '').replace('$', ''));
        break;
    }

    lines.forEach(item => tableBody.append(item));
  });
});
