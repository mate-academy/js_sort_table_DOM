'use strict';

// write code here

const body = document.querySelector('tbody');
const rows = body.querySelectorAll('tr');
const title = document.querySelector('thead');

title.addEventListener('click', (e) => {
  const index = e.target.cellIndex;
  const sorted = Array.from(rows).sort((A, B) => {
    const cellA = A.children[index].textContent;
    const cellB = B.children[index].textContent;

    if (index === 3) {
      const numA = A.children[index].textContent.slice(1).replace(',', '');
      const numB = B.children[index].textContent.slice(1).replace(',', '');

      return numA - numB;
    } else {
      return cellA.localeCompare(cellB);
    }
  });

  body.append(...sorted);
});
