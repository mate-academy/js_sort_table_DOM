'use strict';

const tableHeaders = document.querySelectorAll('thead th');
const tableRows = document.querySelectorAll('tbody tr');
const table = document.querySelector('tbody');

tableHeaders.forEach(header => {
  header.addEventListener('click', sort);
});

function sort(header) {
  const headerIndex = [...tableHeaders].indexOf(header.target);

  const sortedTable = [...tableRows].sort((elem1, elem2) => {
    const textElem1 = elem1.children[headerIndex].innerText;
    const textElem2 = elem2.children[headerIndex].innerText;

    if (textElem1[0] === '$' || !isNaN(+textElem1)) {
      return parseInt(textElem1.replace(/\D/g, ''))
      - parseInt(textElem2.replace(/\D/g, ''));
    }

    return textElem1.localeCompare(textElem2);
  });

  table.append(...sortedTable);
};
