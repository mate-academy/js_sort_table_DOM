'use strict';

const tableHeaders = document.querySelectorAll('thead th');
const tableRows = document.querySelectorAll('tbody tr');
const table = document.querySelector('tbody');

tableHeaders.forEach(header => {
  header.addEventListener('click', sort);
});

function sort(header) {
  const headerIndex = [...tableHeaders].indexOf(header.target);

  const sortedTable = [...tableRows].sort((a, b) => {
    const textA = a.children[headerIndex].innerText;
    const textB = b.children[headerIndex].innerText;

    if (textA[0] === '$' || !isNaN(+textA)) {
      return parseInt(textA.replace(/\D/g, ''))
      - parseInt(textB.replace(/\D/g, ''));
    }

    return textA.localeCompare(textB);
  });

  table.append(...sortedTable);
};
