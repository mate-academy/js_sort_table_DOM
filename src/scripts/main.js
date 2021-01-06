'use strict';

// write code here
const tableBody = document.querySelector('tbody');
const tableHead = document.querySelector('thead');
const people = tableBody.querySelectorAll('tr');
const peopleArray = [...people];

function toNumber(value) {
  if (+value) {
    return +value;
  } else {
    return +value.slice(1).split(',').join('');
  }
};

function sortTable(event) {
  const columnIndex = event.target.cellIndex;

  peopleArray.sort((a, b) => {
    if (!toNumber(a.cells[columnIndex].innerText)) {
      return a.cells[columnIndex].innerText
        .localeCompare(b.cells[columnIndex].innerText);
    }

    return toNumber(a.cells[columnIndex].innerText)
    - toNumber(b.cells[columnIndex].innerText);
  });

  tableBody.append(...peopleArray);
}

tableHead.addEventListener('click', sortTable);
