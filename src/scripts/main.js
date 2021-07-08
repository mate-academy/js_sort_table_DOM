'use strict';

const tableHead = document.querySelector('thead');
const tableBody = document.querySelector('tbody');

tableBody.sortTable = function(callback) {
  let count;

  do {
    count = 0;

    for (let i = 1; i < this.rows.length; i++) {
      if (callback(this.rows[i - 1], this.rows[i]) > 0) {
        this.rows[i - 1].before(tableBody.rows[i]);
        count++;
      }
    }
  } while (count > 0);

  return this;
};

function sortedByCallback(type, column) {
  if (type === 'string') {
    return (a, b) =>
      (a.children[column].innerHTML)
        .localeCompare(b.children[column].innerHTML);
  } else if (type === 'salary') {
    return (a, b) =>
      +a.children[column].innerHTML.slice(1).split(',').join('')
        - +b.children[column].innerHTML.slice(1).split(',').join('');
  } else {
    return (a, b) =>
      +a.children[column].innerHTML
      - +b.children[column].innerHTML;
  }
}

tableHead.addEventListener('click', e => {
  const tableCeil = e.target;
  const columnforSort = [...tableHead.children[0].children].indexOf(tableCeil);
  let typeToSort;

  switch (tableCeil.innerText) {
    case 'Name':
    case 'Position':
      typeToSort = 'string';
      break;

    case 'Age':
      typeToSort = 'age';
      break;

    case 'Salary':
      typeToSort = 'salary';
      break;
  }

  tableBody.sortTable(sortedByCallback(typeToSort, columnforSort));
});
