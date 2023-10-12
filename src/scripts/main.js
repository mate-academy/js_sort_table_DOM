'use strict';

const headerItems = document.querySelectorAll('thead th');
const tableRows = document.querySelectorAll('tbody tr');
const table = document.querySelector('tbody');

headerItems.forEach(item => {
  item.addEventListener('click', sort);
});

function sort(item) {
  const itemIndex = [...headerItems].indexOf(item.target);

  const sortedTable = [...tableRows].sort((row1, row2) => {
    const textRow1 = row1.children[itemIndex].innerText;
    const textRow2 = row2.children[itemIndex].innerText;

    if (textRow1[0] === '$' || !isNaN(+textRow1)) {
      return parseInt(textRow1.replace(/\D/g, ''))
      - parseInt(textRow2.replace(/\D/g, ''));
    }

    return textRow1.localeCompare(textRow2);
  });

  table.append(...sortedTable);
}
