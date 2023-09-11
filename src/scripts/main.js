'use strict';

const table = document.querySelector('table');
const rows = [...table.tBodies[0].querySelectorAll('tr')];

function getNumFromString(str) {
  return +str.replaceAll(/\D/gmi, '');
}

table.tHead.addEventListener('click', (e) => {
  if (e.target.tagName === 'TH') {
    const index = [...e.target.parentElement.children].indexOf(e.target);
    const sortValue = e.target.textContent;

    const sortedRows = rows.sort((row1, row2) => {
      const row1Value = row1.children[index].textContent;
      const row2Value = row2.children[index].textContent;

      switch (sortValue) {
        case 'Name':
        case 'Position':
          return row1Value.localeCompare(row2Value);

        case 'Age':
        case 'Salary':
          return getNumFromString(row1Value) - getNumFromString(row2Value);
      }
    });

    table.tBodies[0].append(...sortedRows);
  }
});
