'use strict';

// write code here
const tableHead = document.querySelector('thead');
const tableBody = document.querySelector('tbody');
const rows = [...tableBody.rows];

function toNumbers(string) {
  return +string.replace(/[$,]/g, '');
}

function sortBy(filter, index) {
  switch (filter) {
    case 'Name':
    case 'Position':
      rows.sort(
        (a, b) => a.children[index].innerHTML
          .localeCompare(b.children[index].innerHTML)
      );
      break;
    case 'Age':
    case 'Salary':
      rows.sort(
        (a, b) => toNumbers(a.children[index].innerHTML)
          - toNumbers(b.children[index].innerHTML)
      );
      break;
  }
}

tableHead.addEventListener('click', e => {
  if (e.target.tagName !== 'TH') {
    return;
  }

  sortBy(e.target.innerHTML, e.target.cellIndex);

  rows.forEach(row => {
    tableBody.append(row);
  });
});
