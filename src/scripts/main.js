'use strict';

const tableHeader = document.querySelector('thead');
const headers = [...tableHeader.childNodes[1].childNodes]
  .filter(node => node.nodeType === Node.ELEMENT_NODE);

function sortTableColumn(type, tableColumn) {
  switch (type) {
    case 'Name':
    case 'Position':
      return tableColumn.sort((a, b) => a.localeCompare(b));
    case 'Age':
      return tableColumn.sort((a, b) => Number(a) - Number(b));
    case 'Salary':
      return tableColumn.sort((a, b) => +a.slice(1).split(',').join('')
        - b.slice(1).split(',').join(''));
    default:
      throw new Error('there is no such column name in given table.');
  }
}

headers.forEach(header => {
  header.addEventListener('click', (currEvent) => {
    let columnNumber = 0;
    const tableHeaderLen = tableHeader.children[0].children.length;

    for (let i = 0; i < tableHeaderLen; i++) {
      if (tableHeader.children[0].children[i] === currEvent.srcElement) {
        columnNumber = i;
      }
    }

    const tableBody = document.querySelector('tbody');
    const currentColumn = [...tableBody.children]
      .map(tr => tr.children[columnNumber].textContent);

    sortTableColumn(currEvent.srcElement.textContent, currentColumn);

    [...tableBody.children].forEach((tr, index) => {
      tr.children[columnNumber].textContent = currentColumn[index];
    });
  });
});
