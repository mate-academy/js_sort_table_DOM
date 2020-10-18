'use strict';

const table = document.querySelector('table');
const tBodyRows = [ ...table.tBodies[0].rows ];

function takeDigit(string) {
  return string.match(/[0-9]/g).join('');
}

table.addEventListener('click', event => {
  if (event.target.parentNode.parentNode.tagName !== 'THEAD') {
    return;
  }

  const targetCollumn = event.target.textContent;
  let haveChildren = table.children[1].children.length;

  tBodyRows.sort((a, b) => {
    const rowA = event.target.orderASC ? b : a;
    const rowB = event.target.orderASC ? a : b;

    switch (targetCollumn) {
      case 'Name':
        return rowA.cells[0].textContent
          .localeCompare(rowB.cells[0].textContent);

      case 'Position':
        return rowA.cells[1].textContent
          .localeCompare(rowB.cells[1].textContent);

      case 'Age':
        return rowA.cells[2].textContent - rowB.cells[2].textContent;

      case 'Salary':
        return takeDigit(rowA.cells[3].innerText)
        - takeDigit(rowB.cells[3].innerText);
    }
  });

  while (haveChildren) {
    table.children[1].children[haveChildren - 1].remove();
    haveChildren--;
  };

  tBodyRows.forEach(row => (
    table.children[1].insertAdjacentHTML('beforeend', row.innerHTML)
  ));
  event.target.orderASC = !event.target.orderASC;
});
