'use strict';

const theadRows = document.querySelectorAll('thead th');
const tbodyRows = document.querySelectorAll('tbody tr');
const table = document.querySelector('tbody');

const sortArray = (item) => {
  const index = [...theadRows].indexOf(item.target);

  const sortedRows = [...tbodyRows].sort((a, b) => {
    const firstRow = a.children[index].innerText;
    const secondRow = b.children[index].innerText;

    if (firstRow[0].includes('$') || !isNaN(parseFloat(firstRow))) {
      return parseFloat(firstRow.replace(/\D/g, ''))
      - parseFloat(secondRow.replace(/\D/g, ''));
    }

    return firstRow.localeCompare(secondRow);
  });

  table.append(...sortedRows);
};

theadRows.forEach(item => {
  item.addEventListener('click', sortArray);
});
