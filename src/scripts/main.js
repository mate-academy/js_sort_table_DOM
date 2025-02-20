'use strict';

const thead = document.querySelector('thead');
const tbody = document.querySelector('tbody');
const tbodyElements = Array.from(tbody.querySelectorAll('tr'));

const sorting = (item) => {
  const sortedRows = tbodyElements.sort((a, b) => {
    switch (item) {
      case 'Name':
        return a.firstElementChild.textContent.localeCompare(
          b.firstElementChild.textContent,
        );
      case 'Position':
        return a.children[1].textContent.localeCompare(
          b.children[1].textContent,
        );
      case 'Age':
        return a.children[2].textContent - b.children[2].textContent;
      case 'Salary':
        const cellA = a.children[3].textContent
          .replace('$', '')
          .replace(',', '');
        const cellB = b.children[3].textContent
          .replace('$', '')
          .replace(',', '');

        return cellA - cellB;

      default:
        break;
    }
  });

  tbody.innerHTML = '';
  sortedRows.forEach((row) => tbody.appendChild(row));
};

thead.addEventListener('click', (e) => {
  sorting(e.target.textContent);
});
