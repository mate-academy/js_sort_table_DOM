'use strict';

const tableBody = document.querySelector('tbody');
const tableHead = document.querySelector('thead');
const rows = [...tableBody.rows];

function sortTableText(index, array) {
  const text = rows[0].cells[index].innerText;

  const sortedRow = array.sort((rowA, rowB) => {
    if (!isNaN(Number(text))) {
      return rowA.cells[index].innerText - rowB.cells[index].innerText;
    };

    if (text[0] === '$') {
      return convertToNumber(rowA.cells[index].innerText)
      - convertToNumber(rowB.cells[index].innerText);
    };

    return rowA.cells[index].innerText
      .localeCompare(rowB.cells[index].innerText);
  });

  tableBody.append(...sortedRow);
}

tableHead.addEventListener('click', (e) => {
  const index = [...tableHead.rows[0].cells].indexOf(e.target);

  sortTableText(index, rows);
});

function convertToNumber(string) {
  return +string.slice(1).split(',').join('');
};
