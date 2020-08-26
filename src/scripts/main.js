'use strict';

const header = [...document.querySelectorAll('thead tr')];
const tbody = [...document.querySelectorAll('tbody tr')];
let sortedTable;

document.addEventListener('click', event => {
  if (event.target.tagName === 'TH') {
    const columnIndex = [...header[0].children].indexOf(event.target);

    sortedTable = tbody.sort((a, b) => {
      const first = a.children[columnIndex].innerText.replace(/[$,]/g, '');

      const second = b.children[columnIndex].innerText.replace(/[$,]/g, '');

      if (!isNaN(first)) {
        return first - second;
      }

      return first < second ? -1 : 1;
    });
  }
  document.querySelector('tbody').append(...sortedTable);
});
