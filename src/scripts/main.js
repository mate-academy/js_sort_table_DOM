'use strict';

const table = document.querySelector('table');
const tbody = document.querySelector('tbody');
const rows = document.querySelectorAll('tr');
const rowsWithData = [];

[...rows].forEach(i => {
  if (tbody.contains(i)) {
    rowsWithData.push(i);
  }
});

table.addEventListener('click', (e) => {
  if (e.target.tagName !== 'TH') {
    return;
  }

  const index = e.target.cellIndex;

  const sort = rowsWithData.sort((row1, row2) => {
    const cell1 = (row1.children[index] === row1.lastElementChild)
      ? row1.children[index].textContent.replace(/[$,]/g, '')
      : row1.children[index].textContent;

    const cell2 = (row2.children[index] === row2.lastElementChild)
      ? row2.children[index].textContent.replace(/[$,]/g, '')
      : row2.children[index].textContent;

    if (isNaN(cell1)) {
      return cell1.localeCompare(cell2);
    } else {
      return (cell1 - cell2);
    };
  });

  tbody.append(...sort);
});
