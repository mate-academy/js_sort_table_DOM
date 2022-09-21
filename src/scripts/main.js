'use strict';

// write code here
function tableSort(type, tableItems) {
  let sortedTable;

  switch (type) {
    case 'Name':
      sortedTable = [...tableItems]
        .sort((a, b) => (
          a.children[0].innerText.localeCompare(b.children[0].innerText)
        ));
      break;

    case 'Position':
      sortedTable = [...tableItems]
        .sort((a, b) => (
          a.children[1].innerText.localeCompare(b.children[1].innerText)
        ));
      break;

    case 'Age':
      sortedTable = [...tableItems]
        .sort((a, b) => (b.children[2].innerText - a.children[2].innerText));
      break;

    case 'Salary':
      sortedTable = [...tableItems]
        .sort((a, b) => (
          b.children[3].innerText.slice(1).split(',').join('')
          - a.children[3].innerText.slice(1).split(',').join('')
        ));
      break;

    default:
      sortedTable = [...tableItems];
      break;
  }

  return sortedTable;
}

const tableHead = document.querySelector('thead > tr');

tableHead.addEventListener('click', (e) => {
  const headCell = e.target.closest('th');
  const tableRows = document.querySelectorAll('tbody > tr');
  const tableBody = document.querySelector('tbody');

  const sorted = tableSort(headCell.innerText, tableRows);

  tableBody.innerHTML = '';

  for (const item of sorted) {
    tableBody.appendChild(item);
  }
});
