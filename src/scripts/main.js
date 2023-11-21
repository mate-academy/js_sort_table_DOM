'use strict';

const tableBody = document.querySelector('tbody');
const tableHeaders = document.querySelectorAll('thead th');
const tableRows = tableBody.querySelectorAll('tr');

tableHeaders.forEach(header => header.addEventListener('click', e => {
  const index = [...tableHeaders].indexOf(e.target);

  const sortedTable = [...tableRows].sort((a, b) => {
    const aContent = a.children[index].innerHTML;
    const bContent = b.children[index].innerHTML;

    if (aContent[0] === '$' || !isNaN(aContent)) {
      return Number(aContent.replace(/\D/g, ''))
        - Number(bContent.replace(/\D/g, ''));
    };

    return aContent.localeCompare(bContent);
  });

  tableBody.append(...sortedTable);
}));
