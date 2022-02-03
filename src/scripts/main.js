'use strict';

const headers = document.querySelector('thead');
const body = document.querySelector('tbody');
const rows = body.querySelectorAll('tr');
const arrRows = [...rows];

headers.addEventListener('click', (e) => {
  if (e.target.tagName !== 'TH') {
    return;
  }

  const index = e.target.cellIndex;
  const sorted = arrRows.sort((a, b) => {
    const elementA = a.cells[index].innerHTML.replace(/\$|,/g, '');
    const elementB = b.cells[index].innerHTML.replace(/\$|,/g, '');

    if (isNaN(elementA)) {
      return elementA.localeCompare(elementB);
    } else {
      return elementA - elementB;
    }
  });

  body.append(...sorted);
});
