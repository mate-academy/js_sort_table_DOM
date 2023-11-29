'use strict';

const headerItems = document.querySelectorAll('thead th');
const tableRows = document.querySelectorAll('tbody tr');
const table = document.querySelector('tbody');

function sort(item) {
  const itemIndex = [...headerItems].indexOf(item.target);

  const sortedTable = [...tableRows].sort((rowA, rowB) => {
    const textRowA = rowA.children[itemIndex].innerText;
    const textRowB = rowB.children[itemIndex].innerText;

    if (textRowA[0] === '$' || !isNaN(+textRowA)) {
      return parseInt(textRowA.replace(/\D/g, ''))
      - parseInt(textRowB.replace(/\D/g, ''));
    }

    return textRowA.localeCompare(textRowB);
  });

  table.append(...sortedTable);
}

headerItems.forEach(item => {
  item.onclick = sort;
});
