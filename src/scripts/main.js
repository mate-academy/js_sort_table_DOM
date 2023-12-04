'use strict';

const table = document.querySelector('tbody');
const tableHeaders = document.querySelectorAll('thead th');
const tableRows = document.querySelectorAll('tbody tr');

function sort(header) {
  const index = [...tableHeaders].indexOf(header.target);

  const sortedTable = [...tableRows].sort((a, b) => {
    const innerA = a.children[index].innerText;
    const innerB = b.children[index].innerText;

    if (innerA[0] === '$' || !isNaN(+innerA)) {
      return parseInt(innerA.replace(/\D/g, ''))
      - parseInt(innerB.replace(/\D/g, ''));
    }

    return innerA.localeCompare(innerB);
  });

  table.append(...sortedTable);
}

tableHeaders.forEach(header => {
  header.onclick = sort;
});
