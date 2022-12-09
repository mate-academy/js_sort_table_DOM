'use strict';

// write code here
const tableHeader = document.querySelector('thead');
const table = document.querySelector('tbody');

const addTable = (array) => {
  array.forEach(tr => {
    table.append(tr);
  });
};

function getSortedArray(array, index) {
  const result = array.sort((row1, row2) => {
    if (row1.cells[index].innerText[0] === '$') {
      const cellOne = +row1.cells[index].innerText.slice(1).replace(/,/g, '');
      const cellTwo = +row2.cells[index].innerText.slice(1).replace(/,/g, '');

      return cellOne - cellTwo;
    }

    return (
      row1.cells[index].textContent.localeCompare(row2.cells[index].textContent)
    );
  });

  return result;
}

tableHeader.addEventListener('click', (e) => {
  const title = e.target.closest('th');

  if (!title) {
    return;
  }

  switch (title.textContent) {
    case 'Name':
      addTable(getSortedArray(Array.from(table.rows), 0));
      break;
    case 'Position':
      addTable(getSortedArray(Array.from(table.rows), 1));
      break;
    case 'Age':
      addTable(getSortedArray(Array.from(table.rows), 2));
      break;
    case 'Salary':
      addTable(getSortedArray(Array.from(table.rows), 3));
      break;
  }
});
