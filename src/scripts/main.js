'use strict';

const table = document.querySelector('table');

table.addEventListener('click', (e) => {
  if (e.target.tagName !== 'TH') {
    return;
  }

  const headers = e.target.parentNode.children;
  const headersArray = [...headers];
  const index = headersArray.indexOf(e.target);
  const rows = [...table.querySelectorAll('tbody tr')];

  rows.sort((rowA, rowB) => {
    const valueA = rowA.children[index].textContent.trim();
    const valueB = rowB.children[index].textContent.trim();

    if (index === 2 || index === 3) {
      let numA = valueA;
      let numB = valueB;

      if (index === 3) {
        numA = parseInt(valueA.replace(/[^0-9]/g, ''));
        numB = parseInt(valueB.replace(/[^0-9]/g, ''));
      } else {
        numA = parseInt(valueA);
        numB = parseInt(valueB);
      }

      return numA - numB;
    } else {
      return valueA > valueB ? 1 : valueA < valueB ? -1 : 0;
    }
  });

  rows.forEach((row) => {
    table.querySelector('tbody').appendChild(row);
  });
});
