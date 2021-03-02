'use strict';

const tableBody = document.querySelector('tbody');
const tableHead = document.querySelector('thead');

tableHead.addEventListener('click', e => {
  const column = e.target.closest('th');

  if (!column) {
    return;
  }

  const columnIndex = [...column.parentElement.children]
    .findIndex(child => child === column);

  const sortedRows = [...tableBody.children].sort((currentRow, nextRow) => {
    const firstOperand = formatNumber(
      currentRow.children[columnIndex].textContent
    );
    const secondOperand = formatNumber(
      nextRow.children[columnIndex].textContent
    );

    if (firstOperand > secondOperand) {
      return 1;
    } else if (firstOperand < secondOperand) {
      return -1;
    } else {
      return 0;
    }
  });

  tableBody.append(...sortedRows);
});

function formatNumber(string) {
  return /[$0-9.]/g.test(string[0])
    ? +string.replace(/[^0-9.]/g, '')
    : string;
}
