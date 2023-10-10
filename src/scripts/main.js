'use strict';

const headerItems = document.querySelectorAll('thead th');
const tableRows = document.querySelectorAll('tbody tr');
const table = document.querySelector('tbody');

function sort(item) {
  const itemIndex = [...headerItems].indexOf(item.target);

  const sortedTable = [...tableRows].sort((rowA, rowB) => {
    const textRowA = rowA.children[itemIndex].innerText;
    const textRowB = rowB.children[itemIndex].innerText;

    const numberRowA = parseFloat(textRowA.replace(/[^0-9.-]+/g, ''));
    const numberRowB = parseFloat(textRowB.replace(/[^0-9.-]+/g, ''));

    return numberRowA - numberRowB;
  });

  table.append(...sortedTable);
}

headerItems.forEach(item => {
  item.onclick = sort;
});
