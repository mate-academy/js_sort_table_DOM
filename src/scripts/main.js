'use strict';

// write code here
const tableBody = document.querySelector('tbody');
const tableHead = document.querySelector('thead');

tableHead.addEventListener('click', (e) => {
  const sort = e.target.cellIndex;
  const sorted = [...tableBody.children].sort((a, b) => {
    let one = a.cells[sort].innerText;
    let two = b.cells[sort].innerText;

    if (one.includes('$')) {
      one = one.replace(/[$,]/g, '');
      two = two.replace(/[$,]/g, '');

      return one - two;
    }

    return one.localeCompare(two);
  });

  tableBody.append(...sorted);
});
